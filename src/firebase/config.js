import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4mChiorfJJb18C8JDZ7cf6-KVSz65Q8I",
  authDomain: "stauthnew.firebaseapp.com",
  projectId: "stauthnew",
  storageBucket: "stauthnew.appspot.com",
  messagingSenderId: "609754180974",
  appId: "1:609754180974:web:9dba785d08e6325673a57f"
};

// init firebase
 firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
