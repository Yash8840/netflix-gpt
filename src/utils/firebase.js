// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj076x1q2R11xA8RnNUKXShNXlVR0fyKM",
  authDomain: "netflixgpt-d8d3d.firebaseapp.com",
  projectId: "netflixgpt-d8d3d",
  storageBucket: "netflixgpt-d8d3d.firebasestorage.app",
  messagingSenderId: "601553125863",
  appId: "1:601553125863:web:9f4e1de230e3e9605ffd42",
  measurementId: "G-S0X41QQSF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);