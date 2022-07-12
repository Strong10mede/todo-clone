// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqY0B8EqI_96ulc4S0Ivrz7yDTuPSBfLc",
  authDomain: "todo-clone-5ef19.firebaseapp.com",
  projectId: "todo-clone-5ef19",
  storageBucket: "todo-clone-5ef19.appspot.com",
  messagingSenderId: "214672353113",
  appId: "1:214672353113:web:80579561913a0f4ff68e48",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
