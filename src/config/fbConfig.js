import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCVLE_orR7yZQbsRZMrXHbJn2YKgDUcsB0",
  authDomain: "project-pragma.firebaseapp.com",
  databaseURL: "https://project-pragma.firebaseio.com",
  projectId: "project-pragma",
  storageBucket: "project-pragma.appspot.com",
  messagingSenderId: "662174790251",
  appId: "1:662174790251:web:1663857bc764d82df2372e",
  measurementId: "G-SF1P9Z0FG3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
