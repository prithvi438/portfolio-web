import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 


const firebaseConfig = {
  apiKey: "AIzaSyC2pPFr9MFsZ1C1Mv5i5mu3g1WGLQF3xPk",
  authDomain: "portfolio-45402.firebaseapp.com",
  projectId: "portfolio-45402",
  storageBucket: "portfolio-45402.firebasestorage.app",
  messagingSenderId: "215262308836",
  appId: "1:215262308836:web:ef582bbfd09169f3817ff1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

export { app, db };