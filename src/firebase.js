
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz4nBp5X6GwvpcUsRcWfJbE_Q7YPdm61I",
  authDomain: "clone-66635.firebaseapp.com",
  projectId: "clone-66635",
  storageBucket: "clone-66635.appspot.com",
  messagingSenderId: "808061232856",
  appId: "1:808061232856:web:1496e30c2e3bbbaf5399ad",
  measurementId: "G-NDPXCXTJM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();