// =========================================================
// CHRISTIAN MOVIE GUIDE — Authentication
// Handles Sign In / Create Account / Google Sign-In / Sign Out,
// and keeps the header UI in sync with the current user.
// =========================================================
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { auth } from "./firebase-init.js";

let mode = "signin"; // "signin" | "signup"

document.addEventListener("DOMContentLoaded", () => {
  initSigninModal();
  initAuthStateListener();
});

/* ---------- Sign-in modal: open/close, mode toggle, form handling ---------- */
function initSigninModal() {
  const signinBtn = document.getElementById("signin-btn");
  const modal = document.getElementById("signin-modal");
  const form = document.getElementById("auth-form");
  const toggleBtn = document.getElementById("auth-toggle-mode");
  const googleBtn = document.getElementById("google-signin-btn");
  const signoutBtn = document.getElementById("signout-btn");
  const errorEl = document.getElementById("auth-error");

  if (!modal) return; // sign-in modal isn't on this page

  if (signinBtn) {
    signinBtn.addEventListener("click", () => {
      setMode("signin");
      modal.classList.add("open");
    });
  }

  modal.querySelectorAll("[data-close-modal]").forEach((el) =>
    el.addEventListener("click", () => modal.classList.remove("open"))
  );
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      setMode(mode === "signin" ? "signup" : "signin");
    });
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearError();
      const email = document.getElementById("auth-email-input").value.trim();
      const password = document.getElementById("auth-password-input").value;
      const submitBtn = document.getElementById("auth-submit-btn");

      submitBtn.disabled = true;
      try {
        if (mode === "signin") {
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }
        modal.classList.remove("open");
        form.reset();
      } catch (err) {
        showError(friendlyAuthError(err));
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
      clearError();
      try {
        await signInWithPopup(auth, new GoogleAuthProvider());
        modal.classList.remove("open");
      } catch (err) {
        showError(friendlyAuthError(err));
      }
    });
  }

  if (signoutBtn) {
    signoutBtn.addEventListener("click", () => signOut(auth));
  }

  function setMode(newMode) {
    mode = newMode;
    const isSignin = mode === "signin";
    document.getElementById("signin-title").textContent = isSignin ? "Sign In" : "Create Account";
    document.getElementById("signin-subtitle").textContent = isSignin
      ? "Welcome back to Christian Movie Guide."
      : "Join Christian Movie Guide to manage your subscription.";
    document.getElementById("auth-submit-btn").textContent = isSignin ? "Sign In" : "Create Account";
    document.getElementById("auth-toggle-prompt").textContent = isSignin
      ? "Don't have an account?"
      : "Already have an account?";
    toggleBtn.textContent = isSignin ? "Create one" : "Sign in";
    clearError();
  }

  function showError(msg) {
    if (!errorEl) return;
    errorEl.textContent = msg;
    errorEl.hidden = false;
  }

  function clearError() {
    if (!errorEl) return;
    errorEl.hidden = true;
    errorEl.textContent = "";
  }
}

/* ---------- Keep the header in sync with sign-in state ---------- */
function initAuthStateListener() {
  onAuthStateChanged(auth, (user) => {
    document.querySelectorAll("#signin-btn").forEach((btn) => {
      btn.hidden = !!user;
    });
    document.querySelectorAll(".auth-signed-in").forEach((el) => {
      el.hidden = !user;
    });
    document.querySelectorAll(".auth-email").forEach((el) => {
      el.textContent = user ? user.email || "Signed in" : "";
    });
  });
}

/* ---------- Turn Firebase Auth error codes into plain-English messages ---------- */
function friendlyAuthError(err) {
  const code = err && err.code;
  const messages = {
    "auth/invalid-email": "That email address looks invalid.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/email-already-in-use": "An account already exists with that email.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/popup-closed-by-user": "Sign-in was cancelled.",
  };
  return messages[code] || "Something went wrong. Please try again.";
}

export { auth };
