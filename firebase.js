// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyDwYctsQkNV96NXgJqpyfIY3ZC7ydzEtn8",
  
    authDomain: "test-save1-87f6e.firebaseapp.com",
  
    projectId: "test-save1-87f6e",
  
    storageBucket: "test-save1-87f6e.appspot.com",
  
    messagingSenderId: "1050799847545",
  
    appId: "1:1050799847545:web:5f358820d1418e4c5b3ca8"
  
  };
  

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };