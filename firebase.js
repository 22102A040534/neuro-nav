import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_AIzaSyD2LRDtOE69OwKAfUNVT8zO2zceZPQW8UI,
  authDomain: process.env.NEXT_PUBLIC_neuro-nav.firebaseapp.com,
  projectId: process.env.NEXT_PUBLIC_neuro-nav,
  storageBucket: process.env.NEXT_PUBLIC_neuro-nav.firebasestorage.app,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_907909921299,
  appId: process.env.NEXT_PUBLIC_1:907909921299:web:4e46c794d1222fa59b1de6
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2LRDtOE69OwKAfUNVT8zO2zceZPQW8UI",
  authDomain: "neuro-nav.firebaseapp.com",
  projectId: "neuro-nav",
  storageBucket: "neuro-nav.firebasestorage.app",
  messagingSenderId: "907909921299",
  appId: "1:907909921299:web:4e46c794d1222fa59b1de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);