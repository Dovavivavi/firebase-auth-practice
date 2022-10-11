import { initializeApp } from "firebase/app";

import {
  // GoogleAuthProvider,
  getAuth,
  // signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  // signOut,
} from "firebase/auth";
import {
  // getFirestore,
  // query,
  // getDocs,
  // collection,
  // where,
  // addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb7_nTduqu0yKpGllNrEMNKeCOlE-UxeU",
  authDomain: "fir-auth-practice-770c8.firebaseapp.com",
  projectId: "fir-auth-practice-770c8",
  storageBucket: "fir-auth-practice-770c8.appspot.com",
  messagingSenderId: "214339991819",
  appId: "1:214339991819:web:0b280f3b60742844990a0e"
};

const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
console.log('run?')
//login
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
//register
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // await addDoc(collection(db, "users"), {
    //   uid: user.uid,
    //   authProvider: "local",
    //   email,
    // });
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};