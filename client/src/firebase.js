// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-a.firebaseapp.com",
  projectId: "mern-estate-a",
  storageBucket: "mern-estate-a.firebasestorage.app",
  messagingSenderId: "864517467700",
  appId: "1:864517467700:web:07da69f4b25051dce4a461"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);