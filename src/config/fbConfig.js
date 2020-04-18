import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAv5OFhZ9qARGFYfC1XHvytirF5baTmB30",
  authDomain: "project-pragma-7196b.firebaseapp.com",
  databaseURL: "https://project-pragma-7196b.firebaseio.com",
  projectId: "project-pragma-7196b",
  storageBucket: "project-pragma-7196b.appspot.com",
  messagingSenderId: "842657870987",
  appId: "1:842657870987:web:bb1cdaacdb73159c17108e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
