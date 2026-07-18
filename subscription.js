// =========================================================
// CHRISTIAN MOVIE GUIDE — Subscription / Paystack checkout
// =========================================================
// - Watches auth state + the user's Firestore "customers/{uid}" doc
// - Exposes window.isUserSubscribed so script.js knows whether to
//   render a movie as locked or unlocked
// - Wires every Subscribe button to actually start Paystack checkout
// =========================================================
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { auth, db } from "./firebase-init.js";

// TODO: replace with your real Netlify site URL once it's deployed
// (found in your Netlify dashboard, looks like https://your-site-name.netlify.app)
const NETLIFY_FUNCTIONS_BASE = "https://stirring-lamington-a35869.netlify.app/.netlify/functions";

window.isUserSubscribed = false;

let currentUser = null;
let unsubscribeCustomerDoc = null;
let latestCustomerData = null;
let recheckIntervalId = null;

document.addEventListener("DOMContentLoaded", () => {
  initSubscribeButtons();
  onAuthStateChanged(auth, handleAuthChange);

  // Re-checks access every 5 minutes so a cancelled subscription locks
  // content right when its paid period ends, even without a page refresh
  // or a new Firestore write to trigger it.
  recheckIntervalId = setInterval(applySubscriptionStatus, 5 * 60 * 1000);
});

/* ---------- Track sign-in state + live subscription status ---------- */
function handleAuthChange(user) {
  currentUser = user;

  if (unsubscribeCustomerDoc) {
    unsubscribeCustomerDoc();
    unsubscribeCustomerDoc = null;
  }

  if (!user) {
    latestCustomerData = null;
    window.isUserSubscribed = false;
    updateSubscriptionUI();
    refreshMovies();
    return;
  }

  // Live-listens, so the moment the webhook confirms a new payment (or a
  // cancellation), the site updates with no page refresh needed.
  unsubscribeCustomerDoc = onSnapshot(
    doc(db, "customers", user.uid),
    (snap) => {
      latestCustomerData = snap.exists() ? snap.data() : null;
      applySubscriptionStatus();
    },
    (err) => {
      console.error("Could not check subscription status:", err);
    }
  );
}

/* ---------- Decide access: active, or cancelled-but-still-in-paid-period ---------- */
function applySubscriptionStatus() {
  if (!latestCustomerData) {
    window.isUserSubscribed = false;
    updateSubscriptionUI();
    refreshMovies();
    return;
  }

  const { subscriptionActive, cancelPending, nextPaymentDate } = latestCustomerData;
  let hasAccess = !!subscriptionActive;

  if (hasAccess && cancelPending && nextPaymentDate) {
    const periodEndsAt = new Date(nextPaymentDate).getTime();
    if (!isNaN(periodEndsAt) && Date.now() >= periodEndsAt) {
      hasAccess = false; // paid period has run out — lock it now
    }
  }

  const changed = hasAccess !== window.isUserSubscribed;
  window.isUserSubscribed = hasAccess;
  updateSubscriptionUI();
  if (changed) refreshMovies();
}

function updateSubscriptionUI() {
  const isCancelling = !!(latestCustomerData && latestCustomerData.cancelPending && window.isUserSubscribed);

  document.querySelectorAll(".subscriber-badge").forEach((el) => {
    el.hidden = !window.isUserSubscribed;
    el.textContent = isCancelling ? "Cancelling" : "Subscriber";
  });
  document.querySelectorAll("#cancel-subscription-btn").forEach((el) => {
    el.hidden = !window.isUserSubscribed || isCancelling;
  });
}

function refreshMovies() {
  if (typeof window.renderMovies === "function") window.renderMovies();
}

/* ---------- Wire up every Subscribe / Cancel button on the page ---------- */
function initSubscribeButtons() {
  document
    .querySelectorAll('[data-action="subscribe"], #modal-subscribe-btn')
    .forEach((btn) => btn.addEventListener("click", handleSubscribeClick));

  document.querySelectorAll("#cancel-subscription-btn").forEach((btn) => {
    btn.addEventListener("click", handleCancelClick);
  });
}

async function handleCancelClick(e) {
  e.preventDefault();
  if (!currentUser) return;

  const confirmed = confirm(
    "Cancel your subscription? You'll keep access to subscriber-only movies until your current paid period ends — you won't be charged again after that."
  );
  if (!confirmed) return;

  const btn = e.currentTarget;
  const originalText = btn.textContent;
  btn.textContent = "Cancelling…";
  btn.disabled = true;

  try {
    const idToken = await currentUser.getIdToken();
    const res = await fetch(`${NETLIFY_FUNCTIONS_BASE}/cancel-subscription`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Could not cancel your subscription.");
    }

    if (data.accessUntil) {
      const formatted = new Date(data.accessUntil).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      alert(`Subscription cancelled — you'll keep access until ${formatted}.`);
    } else {
      alert("Subscription cancelled.");
    }
    // window.isUserSubscribed updates automatically via the live Firestore listener.
  } catch (err) {
    console.error(err);
    alert("Something went wrong cancelling your subscription. Please try again.");
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

async function handleSubscribeClick(e) {
  e.preventDefault();

  // Not signed in yet? Open the sign-in modal instead of checkout.
  if (!currentUser) {
    const signinBtn = document.getElementById("signin-btn");
    if (signinBtn) signinBtn.click();
    return;
  }

  if (window.isUserSubscribed) {
    alert("You're already subscribed — enjoy the full library!");
    return;
  }

  const btn = e.currentTarget;
  const originalText = btn.textContent;
  btn.textContent = "Redirecting…";
  btn.disabled = true;

  try {
    const idToken = await currentUser.getIdToken();
    const res = await fetch(`${NETLIFY_FUNCTIONS_BASE}/initialize-payment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        callbackUrl: window.location.origin + "/movies.html",
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.authorizationUrl) {
      throw new Error(data.error || "Could not start checkout.");
    }

    window.location.href = data.authorizationUrl;
  } catch (err) {
    console.error(err);
    alert("Something went wrong starting checkout. Please try again.");
    btn.textContent = originalText;
    btn.disabled = false;
  }
}
