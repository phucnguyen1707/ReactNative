// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyC0zCI9_dEUUs-J7XD1KxxOJyg0xBpJZq4",
  authDomain: "catcat-24d0a.firebaseapp.com",
  databaseURL: "https://catcat-24d0a-default-rtdb.firebaseio.com",
  projectId: "catcat-24d0a",
  storageBucket: "catcat-24d0a.appspot.com",
  messagingSenderId: "585990929100",
  appId: "1:585990929100:web:d35724f4acafb3b625e069",
  measurementId: "G-GRQGN46E9T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
