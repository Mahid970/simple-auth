// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx1EsL4pmaSRD8nHPiahArDnE2dRMB5Oo",
  authDomain: "simple-auth-34b59.firebaseapp.com",
  projectId: "simple-auth-34b59",
  storageBucket: "simple-auth-34b59.firebasestorage.app",
  messagingSenderId: "558592563008",
  appId: "1:558592563008:web:59eabce1c8e1e885828ca5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (app, auth);
