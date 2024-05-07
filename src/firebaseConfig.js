import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnXhi-BiKwIEVjEhRR9Rc9fqZyJeNhhlw",
  authDomain: "curso-reactjs-coder.firebaseapp.com",
  projectId: "curso-reactjs-coder",
  storageBucket: "curso-reactjs-coder.appspot.com",
  messagingSenderId: "560422296961",
  appId: "1:560422296961:web:07c79f1fa1cd18c7161c80"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)