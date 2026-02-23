import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAOe3MWR_SkYNLXdBmMY7MGZNWnYqHAxA",
  authDomain: "cure-auth-68a6e.firebaseapp.com",
  projectId: "cure-auth-68a6e",
  storageBucket: "cure-auth-68a6e.firebasestorage.app",
  messagingSenderId: "219269533222",
  appId: "1:219269533222:web:0fd526fb07af4e8e0e20e7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
