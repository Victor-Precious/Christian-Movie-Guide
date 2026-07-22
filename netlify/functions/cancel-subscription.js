// =========================================================
// CHRISTIAN MOVIE GUIDE — Netlify Function: cancel subscription
// Called from subscription.js when someone clicks "Cancel Subscription".
// Verifies the person is signed in, then tells Flutterwave to stop
// billing them and updates Firestore.
// =========================================================
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
  });
}
const db = admin.firestore();

// TODO once your site is live, replace "*" with your real domain
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      statusCode: 401,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "You need to sign in first." }),
    };
  }

  const idToken = authHeader.slice("Bearer ".length);
  let decoded;
  try {
    decoded = await admin.auth().verifyIdToken(idToken);
  } catch (err) {
    return {
      statusCode: 401,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Your sign-in has expired. Please sign in again." }),
    };
  }

  const uid = decoded.uid;
  const customerSnap = await db.collection("customers").doc(uid).get();
  const customerData = customerSnap.exists ? customerSnap.data() : null;

  if (!customerData || !customerData.subscriptionId) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "No active subscription found for your account." }),
    };
  }

  const flwRes = await fetch(
    `https://api.flutterwave.com/v3/subscriptions/${customerData.subscriptionId}/cancel`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      },
    }
  );

  const data = await flwRes.json();

  if (data.status !== "success") {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: data.message || "Could not cancel your subscription. Please try again." }),
    };
  }

  // Stop future billing right away, but DON'T cut off access yet — they
  // already paid for the current period, so let it run out naturally
  // (same "access until period end" behavior as before).
  await db.collection("customers").doc(uid).set({ cancelPending: true }, { merge: true });

  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify({ success: true, accessUntil: customerData.nextPaymentDate || null }),
  };
};
