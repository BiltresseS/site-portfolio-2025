/* Template pour le fichier firebase.js à copier-coller au même endroit et à remplir avec les credentials de la base de donnée Firestore */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    /* tes crédentials ici */
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };