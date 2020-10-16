import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const  firebaseConfig = {
    apiKey: "AIzaSyBzMjJcrNlmiDdq3rSJC0fThCri1Zaw9bk",
    authDomain: "rnb-event.firebaseapp.com",
    databaseURL: "https://rnb-event.firebaseio.com",
    projectId: "rnb-event",
    storageBucket: "rnb-event.appspot.com",
    messagingSenderId: "541700159699",
    appId: "1:541700159699:web:30435906e1bb60b09dbc26",
    measurementId: "G-T3F2KTSJ00"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase