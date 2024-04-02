import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD7tyYP_aUF9G4hns1X21bix8F_wYdlPKw",
    authDomain: "invoice-app-yt-ebd15.firebaseapp.com",
    projectId: "invoice-app-yt-ebd15",
    storageBucket: "invoice-app-yt-ebd15.appspot.com",
    messagingSenderId: "99484973114",
    appId: "1:99484973114:web:b10ab084e05cd7ce5b1d03"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();