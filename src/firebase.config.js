// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrYnR3wNLAc83fD7mFd313340oSyTb09c",
  authDomain: "alvaro-blog-94048.firebaseapp.com",
  projectId: "alvaro-blog-94048",
  storageBucket: "alvaro-blog-94048.appspot.com",
  messagingSenderId: "1029256329028",
  appId: "1:1029256329028:web:689ff5e3941c847c7d8911",
  measurementId: "G-P8VW9GG06P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);