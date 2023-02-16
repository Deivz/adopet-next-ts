// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkBlIG5VPlCbs3GlSEBuTgLFuJbwHAOtE",
  authDomain: "adopet-db.firebaseapp.com",
  databaseURL: "https://adopet-db-default-rtdb.firebaseio.com",
  projectId: "adopet-db",
  storageBucket: "adopet-db.appspot.com",
  messagingSenderId: "478592700272",
  appId: "1:478592700272:web:263d735976f09e6b5a09b5",
  measurementId: "G-HT95MV3LNP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);