import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4N-VSzsaJvADQMmd5vykZvyA_Thz4O0Y",
  authDomain: "react-firebase-tutorial-cf8fb.firebaseapp.com",
  databaseURL: "https://react-firebase-tutorial-cf8fb.firebaseio.com",
  projectId: "react-firebase-tutorial-cf8fb",
  storageBucket: "react-firebase-tutorial-cf8fb.appspot.com",
  messagingSenderId: "251226159842",
  appId: "1:251226159842:web:dc88cd6cb7a346ca293cbb",
  measurementId: "G-10DWN7YLJC"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;