// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAFmVIhSqN2Ftbtj5xHVIAC_qijyMkse4Y",

  authDomain: "assignment-no-11-6401b.firebaseapp.com",

  projectId: "assignment-no-11-6401b",

  storageBucket: "assignment-no-11-6401b.appspot.com",

  messagingSenderId: "788770656926",

  appId: "1:788770656926:web:a53a1fe8a290f58539618f",

  measurementId: "G-MEZGWGSFQL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth=getAuth(app)
export default auth;