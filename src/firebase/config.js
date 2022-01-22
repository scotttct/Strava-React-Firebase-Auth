import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMXlU9C7_M-gAXtxuJvf-7CDfc7YhNFNw",
  authDomain: "next-strava-firebase.firebaseapp.com",
  projectId: "next-strava-firebase",
  storageBucket: "next-strava-firebase.appspot.com",
  messagingSenderId: "906046458136",
  appId: "1:906046458136:web:903738c345a116da88366d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
