// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_EoW8GV1MvoZYAlGok19CEaZB5U6jKaM",
  authDomain: "lost-and-found-be161.firebaseapp.com",
  projectId: "lost-and-found-be161",
  storageBucket: "lost-and-found-be161.firebasestorage.app",
  messagingSenderId: "184260601401",
  appId: "1:184260601401:web:e89b60e7f1def2b2530fe8",
  measurementId: "G-0YSX6EM35P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);