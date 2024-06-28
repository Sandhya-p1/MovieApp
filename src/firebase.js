import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDplJIQn5z4AiQj1n8IY3CCAzPHWNI28Y4",
  authDomain: "favmovies-b326b.firebaseapp.com",
  projectId: "favmovies-b326b",
  storageBucket: "favmovies-b326b.appspot.com",
  messagingSenderId: "1085334115855",
  appId: "1:1085334115855:web:e501e686779276fe70357a",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);
export { auth, provider, signInWithGoogle, signOutUser, db };
