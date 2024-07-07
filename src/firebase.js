import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDplJIQn5z4AiQj1n8IY3CCAzPHWNI28Y4",
  authDomain: "favmovies-b326b.firebaseapp.com",
  projectId: "favmovies-b326b",
  storageBucket: "favmovies-b326b.appspot.com",
  messagingSenderId: "1085334115855",
  appId: "1:1085334115855:web:e501e686779276fe70357a",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firebaseProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
