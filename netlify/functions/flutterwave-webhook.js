// =========================================================
// CHRISTIAN MOVIE GUIDE — Netlify Function: Flutterwave webhook
// FLUTTERWAVE calls this directly after a payment (not your site) —
// this is the SOURCE OF TRUTH for "did they actually pay".
// Verifies the request really came from Flutterwave before trusting it.
// =========================================================
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
  });
}
const db = admin.firestore();

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  // Flutterwave sends back the exact secret hash you set in your
  // dashboard (Settings -> Webhooks) — a direct string comparison,
  // NOT a computed signature like Paystack used.
  const signature = event.headers["verif-hash"] || event.headers["Verif-Hash"];
  if (!signature || signature !== process.env.FLW_SECRET_HASH) {
    console.warn("Flutterwave webhook: signature mismatch — rejecting.");
    return { statusCode: 401, body: "Invalid signature" };
  }

  let webhookEvent;
  try {
    webhookEvent = JSON.parse(event.body || "{}");
  } catch (err) {
    return { statusCode: 400, body: "Invalid payload" };
  }

  const data = webhookEvent.data || {};

  // Fires on the very first charge, and on every monthly renewal charge.
  if (webhookEvent.event === "charge.completed" && data.status === "successful") {
    const email = normalizeTestEmail(data.customer && data.customer.email);
    const uidFromMeta = extractUidFromMeta(data.meta);
    const uidFromTxRef = extractUidFromTxRef(data.tx_ref);
    const uid = uidFromMeta || uidFromTxRef || (email ? await findUidByEmail(email) : null);

    if (uid) {
      await db.collection("customers").doc(uid).set(
        {
          subscriptionActive: true,
          cancelPending: false,
          email,
          lastPaymentReference: data.tx_ref,
          lastPaymentAmount: data.amount,
          lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      // If this charge is tied to a payment plan, look up the actual
      // subscription record so we're able to cancel it later.
      if (data.payment_plan) {
        await refreshSubscriptionRecord(uid, email);
      }
    } else {
      console.warn("charge.completed — could not match a user for", email);
    }
  }

  // Fires when a subscription is cancelled (via our cancel-subscription.js,
  // or directly from the Flutterwave dashboard).
  if (webhookEvent.event === "subscription.cancelled") {
    const email = normalizeTestEmail(data.customer && data.customer.email);
    const uid = email ? await findUidByEmail(email) : null;
    if (uid) {
      await db.collection("customers").doc(uid).set({ cancelPending: true }, { merge: true });
    }
  }

  return { statusCode: 200, body: "ok" };
};

/* ---------- Look up which user an email belongs to ---------- */
async function findUidByEmail(email) {
  if (!email) return null;
  const snap = await db.collection("customers").where("email", "==", email).limit(1).get();
  if (snap.empty) return null;
  return snap.docs[0].id;
}

/* ---------- Pull uid straight out of our own tx_ref, e.g. "cmg-<uid>-1721234567890" ----------
   This is the most reliable way to identify who paid on the FIRST charge — it doesn't
   depend on Flutterwave's meta field shape or on emails matching exactly. */
function extractUidFromTxRef(txRef) {
  if (!txRef) return null;
  const match = /^cmg-([^-]+)-\d+$/.exec(txRef);
  return match ? match[1] : null;
}

/* ---------- Handle Flutterwave sometimes sending meta as an object, sometimes as an array ---------- */
function extractUidFromMeta(meta) {
  if (!meta) return null;
  if (!Array.isArray(meta)) return meta.uid || null;
  const entry = meta.find((m) => m && (m.key === "uid" || m.metaname === "uid"));
  return entry ? entry.value || entry.metavalue : null;
}

/* ---------- Flutterwave TEST MODE rewrites emails like "ravesb_<hash>_realname@domain.com" —
   strip that prefix so lookups match the real, stored email. Live mode emails pass through unchanged. */
function normalizeTestEmail(email) {
  if (!email) return email;
  return email.replace(/^ravesb_[a-f0-9]+_/i, "");
}

/* ---------- Fetch the real subscription record so it can be cancelled later ---------- */
async function refreshSubscriptionRecord(uid, email) {
  try {
    const res = await fetch(`https://api.flutterwave.com/v3/subscriptions?email=${encodeURIComponent(email)}`, {
      headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
    });
    const result = await res.json();
    const subscriptions = result && result.data;

    if (Array.isArray(subscriptions) && subscriptions.length) {
      const latest = subscriptions[subscriptions.length - 1];
      // NOTE: verify these exact field names against a real sandbox response —
      // Flutterwave's docs weren't fully explicit on this, so double-check
      // in test mode that nextPaymentDate actually gets a real value here.
      await db.collection("customers").doc(uid).set(
        {
          subscriptionId: latest.id,
          planId: latest.plan,
          nextPaymentDate: latest.next_payment_date || latest.next_billing_date || null,
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.warn("Could not refresh subscription record for", uid, err);
  }
}
