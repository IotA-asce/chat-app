import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8281kxokUEWuKqeF98PUqPDI9cIXwmTQ",
  authDomain: "chat-app-f1ac6.firebaseapp.com",
  projectId: "chat-app-f1ac6",
  storageBucket: "chat-app-f1ac6.appspot.com",
  messagingSenderId: "893514876621",
  appId: "1:893514876621:web:5e8db418aa9eeef170cb84",
  measurementId: "G-H0Y16G6ZD1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);