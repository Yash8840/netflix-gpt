// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCksb9dj060FEFffzJAh9SAEsBYkosfoA",
  authDomain: "netflix-gpt-dcb98.firebaseapp.com",
  projectId: "netflix-gpt-dcb98",
  storageBucket: "netflix-gpt-dcb98.firebasestorage.app",
  messagingSenderId: "344674095629",
  appId: "1:344674095629:web:7d8545cf6d27d70c9d7b44",
  measurementId: "G-YVRJLEJREK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);