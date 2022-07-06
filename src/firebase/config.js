import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAcelzxPpkbKrdV2AnuNkhGzpWUWD-Thos",
  authDomain: "finance-tracker-9e0e5.firebaseapp.com",
  projectId: "finance-tracker-9e0e5",
  storageBucket: "finance-tracker-9e0e5.appspot.com",
  messagingSenderId: "160851080160",
  appId: "1:160851080160:web:b5d7ebaf7eb969c9357185"
};

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}
