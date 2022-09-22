
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCnB0htctW75Z-l6QvPrG5XYj8HcgBJvFs",
  authDomain: "chat-e02e6.firebaseapp.com",
  projectId: "chat-e02e6",
  storageBucket: "chat-e02e6.appspot.com",
  messagingSenderId: "728039322638",
  appId: "1:728039322638:web:d59788f8dd1607320eb85f"
};
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db=getFirestore()