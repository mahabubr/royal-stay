// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ_jv2ewNRgP9IevG7dT-QThYjjTSCopc",
    authDomain: "royal-stay-fe963.firebaseapp.com",
    projectId: "royal-stay-fe963",
    storageBucket: "royal-stay-fe963.appspot.com",
    messagingSenderId: "767379479769",
    appId: "1:767379479769:web:45b3d9855ed14bda3c72c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app