// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-H6zUJytv8LxuVG72NSL9-gqhNilX7GU",
  authDomain: "travelzanja.firebaseapp.com",
  projectId: "travelzanja",
  storageBucket: "travelzanja.firebasestorage.app",
  messagingSenderId: "780662098652",
  appId: "1:780662098652:web:d27876397f5f0002e2c219",
  measurementId: "G-7D21KQZ0TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
//const analytics = getAnalytics(app);