import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBJBxNxnL5e1ycThwHLHrXf01PnCpqOtuo",
  authDomain: "netflix-clone-71a66.firebaseapp.com",
  projectId: "netflix-clone-71a66",
  storageBucket: "netflix-clone-71a66.appspot.com",
  messagingSenderId: "470368656563",
  appId: "1:470368656563:web:7f915cf2b5929bb6eb24c6",
  measurementId: "G-703RQG1HKX"
};
  // const firebase = require("firebase");
  // require("firebase/firestore");
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
