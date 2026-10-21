// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbE6U4gR568vkjpLzAE9YkbhAEXmqv5c0",
  authDomain: "ecommerce-demo-c4e30.firebaseapp.com",
  projectId: "ecommerce-demo-c4e30",
  storageBucket: "ecommerce-demo-c4e30.firebasestorage.app",
  messagingSenderId: "36509609568",
  appId: "1:36509609568:web:ff4c14aba20ca9acfb9d05",
  measurementId: "G-P3CVYSJ7RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
