import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh7rgtQB-LUeai_6U4hCCM8SBS9_4eZc4",
  authDomain: "digisignify.firebaseapp.com",
  projectId: "digisignify",
  storageBucket: "digisignify.appspot.com",
  messagingSenderId: "171012237631",
  appId: "1:171012237631:web:75263593f0751258064b8a",
  measurementId: "G-27HDYSZXT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };