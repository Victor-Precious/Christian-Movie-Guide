// =========================================================
// CHRISTIAN MOVIE GUIDE — Netlify Function: start Paystack checkout
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
// This charges using a Paystack PLAN, not a fixed amount — the plan
// itself defines the price and how often it recurs (e.g. monthly).
// Create the plan in your Paystack dashboard: Payments -> Plans -> New Plan
// (set Interval to "Monthly"), then copy its plan code below.
// ---------------------------------------------------------
const PAYSTACK_PLAN_CODE = process.env.PAYSTACK_PLAN_CODE; // e.g. "PLN_xxxxxxxxxxxx"

// TODO once your site is live, replace "*" with your real domain
// (e.g. "https://christianmovieguide.com") to lock this down.
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

  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (err) {
    // ignore — just use defaults below
  }
  const callbackUrl = payload.callbackUrl || "https://example.com/movies.html";

  if (!PAYSTACK_PLAN_CODE) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Subscription plan isn't configured yet — set PAYSTACK_PLAN_CODE." }),
    };
  }

  const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      // Paystack requires "amount" to be present even when a plan is
      // supplied — it just ignores this value and charges the plan's
      // real price instead. See: https://paystack.com/docs/payments/subscriptions/
      amount: 100,
      currency: "NGN", // must match your plan's currency — change if your plan uses a different one
      channels: ["card"], // explicitly request card, rather than relying on account defaults
      plan: PAYSTACK_PLAN_CODE,
      callback_url: callbackUrl,
      metadata: { uid }, // this is how the webhook knows WHICH user paid
    }),
  });

  const data = await paystackRes.json();

  if (!data.status) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: data.message || "Paystack could not start checkout." }),
    };
  }

  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify({
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference,
    }),
  };
};
