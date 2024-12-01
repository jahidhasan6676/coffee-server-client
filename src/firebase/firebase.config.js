// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxSIrv7fg-PKW0kfAM6kbpLdzO-N1j1HQ",
  authDomain: "coffee-store-5d9dc.firebaseapp.com",
  projectId: "coffee-store-5d9dc",
  storageBucket: "coffee-store-5d9dc.firebasestorage.app",
  messagingSenderId: "786642077802",
  appId: "1:786642077802:web:9c4246828de8fd6c4de213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);