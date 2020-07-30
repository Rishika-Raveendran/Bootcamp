import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD_Lpyx8YYGCfnRhdDtpOy2qrAgzuTF504",
  authDomain: "image-editing-bootcamp.firebaseapp.com",
  databaseURL: "https://image-editing-bootcamp.firebaseio.com",
  projectId: "image-editing-bootcamp",
  storageBucket: "image-editing-bootcamp.appspot.com",
  messagingSenderId: "620552547232",
  appId: "1:620552547232:web:05b670a1b2899351d412c5",
  measurementId: "G-2GJCVCL5TC",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
