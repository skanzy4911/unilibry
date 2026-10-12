import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCVDSObKk44xtuyH8Akw-Pg2_VX273G1xE",
    authDomain: "unilibry-8512e.firebaseapp.com",
    projectId: "unilibry-8512e",
    storageBucket: "unilibry-8512e.firebasestorage.app",
    messagingSenderId: "27600389211",
    appId: "1:27600389211:web:59c70e39ddc55c44b0ab7e",
    measurementId: "G-2B3ZVDFXPE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function authErrorMessage(error) {
    const code = error && typeof error === "object" && "code" in error
        ? error.code
        : "";

    switch (code) {
        case "auth/email-already-in-use":
            return "An account already exists with this email. Try logging in.";
        case "auth/invalid-email":
            return "Enter a valid email address.";
        case "auth/weak-password":
            return "Choose a stronger password.";
        case "auth/invalid-credential":
        case "auth/user-not-found":
        case "auth/wrong-password":
            return "The email or password is incorrect.";
        case "auth/too-many-requests":
            return "There have been too many attempts. Please wait and try again.";
        case "auth/network-request-failed":
            return "Unable to connect. Check your internet connection and try again.";
        case "auth/operation-not-allowed":
            return "Email/password sign-in is not enabled for this Firebase project.";
        case "auth/configuration-not-found":
            return "Firebase Authentication is not configured for this project yet. In Firebase Console, open Authentication and complete setup, then enable Email/Password under Sign-in method.";
        case "auth/unauthorized-domain":
            return "This website address is not authorized in Firebase. Add its hostname under Authentication → Settings → Authorized domains.";
        case "auth/invalid-api-key":
            return "Firebase rejected the API key. Check the web app configuration in firebase.js.";
        default:
            return error instanceof Error ? error.message : "Something went wrong. Please try again.";
    }
}
