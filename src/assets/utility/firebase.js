// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoOLvNC-20GML6gBO9-auc63VrcFeJDck",
  authDomain: "agness-676e9.firebaseapp.com",
  projectId: "agness-676e9",
  storageBucket: "agness-676e9.appspot.com",
  messagingSenderId: "793328621809",
  appId: "1:793328621809:web:7ef4acf85ec9adfa6d3150"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);
const auth = getAuth()

export { storage, auth };
export default db;
