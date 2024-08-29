import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcwdkcp_ryuMiS1oPdKD8v5eBRlRICuQo",
  authDomain: "ecommerce-castro-b91ec.firebaseapp.com",
  projectId: "ecommerce-castro-b91ec",
  storageBucket: "ecommerce-castro-b91ec.appspot.com",
  messagingSenderId: "231461063268",
  appId: "1:231461063268:web:b9baa3bec5f070f1062d71"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
