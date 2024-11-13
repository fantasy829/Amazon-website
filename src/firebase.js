// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFdb1cuf82EsieIJ-KjCYgv8LwMGVTUgI",
  authDomain: "clone-939b4.firebaseapp.com",
  projectId: "clone-939b4",
  storageBucket: "clone-939b4.appspot.com",
  messagingSenderId: "48962993136",
  appId: "1:48962993136:web:8d642ac000a28f0ea07b35",
  measurementId: "G-KCWMWJ0SCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);