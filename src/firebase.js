import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-bGeCSMDGg1mo9u3zT3xY2azufYBp4oc",
    authDomain: "chat-da3bd.firebaseapp.com",
    projectId: "chat-da3bd",
    storageBucket: "chat-da3bd.appspot.com",
    messagingSenderId: "497527937428",
    appId: "1:497527937428:web:1b6c597e6e05b23b9cd781"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()