// =========================================================
// CHRISTIAN MOVIE GUIDE — Netlify Function: Paystack webhook
// PAYSTACK calls this directly after a payment (not your site) —
// this is the SOURCE OF TRUTH for "did they actually pay".
// Verifies the request really came from Paystack before trusting it.
// =========================================================
const admin = require("firebase-admin");
const crypto = require("crypto");

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

  const signature = event.headers["x-paystack-signature"] || event.headers["X-Paystack-Signature"];
  const rawBody = event.body || "";

  const expectedSignature = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.warn("Paystack webhook: signature mismatch — rejecting.");
    return { statusCode: 401, body: "Invalid signature" };
  }

  let webhookEvent;
  try {
    webhookEvent = JSON.parse(rawBody);
  } catch (err) {
    return { statusCode: 400, body: "Invalid payload" };
  }

  const data = webhookEvent.data;

  switch (webhookEvent.event) {
    // Fires on the very first charge, and on every monthly renewal charge.
    case "charge.success": {
      const uid = data.metadata && data.metadata.uid;
      if (uid) {
        // First-ever charge for this user — metadata.uid is present.
        await db.collection("customers").doc(uid).set(
          {
            subscriptionActive: true,
            cancelPending: false,
            email: data.customer.email,
            paystackCustomerCode: data.customer.customer_code,
            lastPaymentReference: data.reference,
            lastPaymentAmount: data.amount,
            lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } else {
        // A recurring renewal charge — Paystack doesn't carry the original
        // metadata on these, so match the user by their customer code instead.
        const foundUid = await findUidByCustomerCode(data.customer.customer_code);
        if (foundUid) {
          await db.collection("customers").doc(foundUid).set(
            {
              subscriptionActive: true,
              cancelPending: false,
              lastPaymentReference: data.reference,
              lastPaymentAmount: data.amount,
              lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
          // Keep nextPaymentDate current so a later cancellation grants
          // access until the CORRECT date, not a stale earlier one.
          await refreshNextPaymentDate(foundUid);
        } else {
          console.warn("charge.success (renewal) — no matching customer for", data.customer.customer_code);
        }
      }
      break;
    }

    // Fires once, right after the first successful charge, confirming the
    // recurring subscription is set up. This is what we need to be able
    // to cancel it later, so store it.
    case "subscription.create": {
      const foundUid = await findUidByCustomerCode(data.customer.customer_code);
      if (foundUid) {
        await db.collection("customers").doc(foundUid).set(
          {
            subscriptionActive: true,
            cancelPending: false,
            subscriptionCode: data.subscription_code,
            emailToken: data.email_token,
            planCode: data.plan && data.plan.plan_code,
            nextPaymentDate: data.next_payment_date || null,
          },
          { merge: true }
        );
      } else {
        console.warn("subscription.create — no matching customer for", data.customer.customer_code);
      }
      break;
    }

    // Fires when a subscription is cancelled — either the user cancelling
    // themselves (cancel-subscription.js already marked cancelPending), or
    // Paystack cancelling it directly (e.g. from the Paystack dashboard).
    // Either way, DON'T cut access here — just make sure cancelPending is
    // set, so the site knows to let access expire at nextPaymentDate
    // instead of renewing again.
    case "subscription.disable":
    case "subscription.not_renew": {
      const foundUid = await findUidByCustomerCode(data.customer.customer_code);
      if (foundUid) {
        await db.collection("customers").doc(foundUid).set(
          { cancelPending: true },
          { merge: true }
        );
      }
      break;
    }

    default:
      // Other events (invoice.create, invoice.payment_failed, etc.) are ignored for now.
      break;
  }

  return { statusCode: 200, body: "ok" };
};

/* ---------- Look up which user a Paystack customer code belongs to ---------- */
async function findUidByCustomerCode(customerCode) {
  if (!customerCode) return null;
  const snap = await db
    .collection("customers")
    .where("paystackCustomerCode", "==", customerCode)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return snap.docs[0].id;
}

/* ---------- After a renewal, re-fetch the subscription's real next payment date ---------- */
async function refreshNextPaymentDate(uid) {
  const customerDoc = await db.collection("customers").doc(uid).get();
  const subscriptionCode = customerDoc.exists && customerDoc.data().subscriptionCode;
  if (!subscriptionCode) return;

  try {
    const res = await fetch(`https://api.paystack.co/subscription/${subscriptionCode}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });
    const result = await res.json();
    if (result.status && result.data && result.data.next_payment_date) {
      await db.collection("customers").doc(uid).set(
        { nextPaymentDate: result.data.next_payment_date },
        { merge: true }
      );
    }
  } catch (err) {
    console.warn("Could not refresh nextPaymentDate for", uid, err);
  }
}
