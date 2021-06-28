import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCpdo5gmg2x4rlrcg5caa_U46a8b8vxJGA",
    authDomain: "calorie-checker-bc80f.firebaseapp.com",
    databaseURL: "https://calorie-checker-bc80f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "calorie-checker-bc80f",
    storageBucket: "calorie-checker-bc80f.appspot.com",
    messagingSenderId: "765619665822",
    appId: "1:765619665822:web:33bd630d86be3013bdf48f"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();


