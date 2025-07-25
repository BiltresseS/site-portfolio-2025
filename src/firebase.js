import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAtztGJH2QksB7cFXVqd9X_DB7r40OHzMs",
    authDomain: "cv-portfolio-41a3f.firebaseapp.com",
    projectId: "cv-portfolio-41a3f",
    storageBucket: "cv-portfolio-41a3f.firebasestorage.app",
    messagingSenderId: "1013546368183",
    appId: "1:1013546368183:web:ba45ba11732e83eaef2132"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };