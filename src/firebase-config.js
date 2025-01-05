// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIgXnGXqUUClPbqB65wLd4rBHR4Mtofbk",
  authDomain: "appatrack-c3214.firebaseapp.com",
  databaseURL: "https://appatrack-c3214-default-rtdb.firebaseio.com",
  projectId: "appatrack-c3214",
  storageBucket: "appatrack-c3214.firebasestorage.app",
  messagingSenderId: "988174982668",
  appId: "1:988174982668:web:5df9f5a8161a1912a8d829"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

const database = getDatabase(app);

export { database };

export default app;