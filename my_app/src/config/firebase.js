import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "lodedash-ecomerce.firebaseapp.com",
  projectId: "lodedash-ecomerce",
  storageBucket: "lodedash-ecomerce.appspot.com",
  messagingSenderId: "332655185611",
  appId: "1:332655185611:web:dfb0c017fe69b6f2ef154e",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)