import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyBIfuT-G07TXNMZ317A_cox1tQ0PPtMhsk",
        authDomain: "trade-it-85a1e.firebaseapp.com",
        databaseURL: "https://trade-it-85a1e.firebaseio.com",
        projectId: "trade-it-85a1e",
        storageBucket: "trade-it-85a1e.appspot.com",
        messagingSenderId: "63971441128",
        appId: "1:63971441128:web:49795290801b7a69a74c5d",
        measurementId: "G-9X6KD2YWZY"
     
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}