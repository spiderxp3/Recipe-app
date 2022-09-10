import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCg1Fkm2oV7UIePIfB4IBu9kQOkph1yvh8",
  authDomain: "recipe-76b44.firebaseapp.com",
  projectId: "recipe-76b44",
  storageBucket: "recipe-76b44.appspot.com",
  messagingSenderId: "71249284587",
  appId: "1:71249284587:web:03e85cdcf9c5d18a345dae",
  measurementId: "G-C5K2L9JYD0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
