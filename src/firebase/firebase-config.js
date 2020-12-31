import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDS6HefK22fpOPHYZyMFro7rhMFqf7sSow',
  authDomain: 'react-app-curso-fer.firebaseapp.com',
  projectId: 'react-app-curso-fer',
  storageBucket: 'react-app-curso-fer.appspot.com',
  messagingSenderId: '212453210531',
  appId: '1:212453210531:web:c81d6564dbc05085aa4216',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
