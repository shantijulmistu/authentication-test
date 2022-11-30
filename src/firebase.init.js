import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBabaA-nlgcascyVwErG2mJ2QZW7NGGpcw",
  authDomain: "authentication-test-9f489.firebaseapp.com",
  projectId: "authentication-test-9f489",
  storageBucket: "authentication-test-9f489.appspot.com",
  messagingSenderId: "1069368650722",
  appId: "1:1069368650722:web:ef8ee9d4fa06499e1fe7bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;