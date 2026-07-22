// =========================================================
// CHRISTIAN MOVIE GUIDE — Netlify Function: start Flutterwave checkout
// Called from subscription.js when someone clicks Subscribe.
// Verifies the person is really signed in (via their Firebase ID
// token) before starting a payment in their name.
// =========================================================
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
  });
}

// ---------------------------------------------------------
// TODO: these MUST match the Payment Plan you created in your
// Flutterwave dashboard (Settings -> Payment Plans).
// IMPORTANT: unlike Paystack, Flutterwave amounts are NOT in the
// smallest currency unit — use the real amount (e.g. 5000 for ₦5,000,
// not 500000).
// ---------------------------------------------------------
const SUBSCRIPTION_AMOUNT = 500; // e.g. ₦5,000 — CHANGE to match your plan's price
const SUBSCRIPTION_CURRENCY = "NGN"; // must match your plan's currency exactly

// Set this to the numeric Payment Plan ID from your Flutterwave dashboard
// (Settings -> Payment Plans -> your plan). It looks like a plain number, e.g. "123456".
const FLW_PLAN_ID = process.env.FLW_PLAN_ID;

// TODO once your site is live, replace "*" with your real domain
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  // Browsers send an OPTIONS "preflight" request before the real POST
  // when calling across domains — this just approves it.
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
      body: JSON.stringify({ error: "You need to sign in before subscribing." }),
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
  const email = decoded.email;
  if (!email) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Your account needs an email address to subscribe." }),
    };
  }

  if (!FLW_PLAN_ID) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Subscription plan isn't configured yet — set FLW_PLAN_ID." }),
    };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (err) {
    // ignore — just use the default below
  }
  const callbackUrl = payload.callbackUrl || "https://example.com/movies.html";

  // Must be unique on every attempt — Flutterwave rejects a reused reference.
  const txRef = `cmg-${uid}-${Date.now()}`;

  const flwRes = await fetch("https://api.flutterwave.com/v3/payments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tx_ref: txRef,
      amount: SUBSCRIPTION_AMOUNT,
      currency: SUBSCRIPTION_CURRENCY,
      redirect_url: callbackUrl,
      payment_plan: FLW_PLAN_ID, // this is what makes it recurring, not a one-off charge
      customer: { email },
      meta: { uid }, // this is how the webhook knows WHICH user paid
    }),
  });

  const data = await flwRes.json();

  if (data.status !== "success" || !data.data || !data.data.link) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: (data && data.message) || "Flutterwave could not start checkout." }),
    };
  }

  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify({
      authorizationUrl: data.data.link, // same field name subscription.js already expects
      reference: txRef,
    }),
  };
};
