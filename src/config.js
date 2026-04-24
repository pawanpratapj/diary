// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjWWrxfKQEqEOTZfG4igFaS896X-u2xGo",
  authDomain: "diarynote-bfe78.firebaseapp.com",
  projectId: "diarynote-bfe78",
  storageBucket: "diarynote-bfe78.firebasestorage.app",
  messagingSenderId: "505823239428",
  appId: "1:505823239428:web:2c63f3b8eac14ad2320451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;