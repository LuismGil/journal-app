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

const firebaseConfigTesting = {
  apiKey: 'AIzaSyAPo-WAc4SGQ4D4LbFymkDDVQX7b-Zx5hs',
  authDomain: 'react-testings-981ea.firebaseapp.com',
  projectId: 'react-testings-981ea',
  storageBucket: 'react-testings-981ea.appspot.com',
  messagingSenderId: '856201897362',
  appId: '1:856201897362:web:0b47a242b31459c8958d4b',
};

if (process.env.NODE_ENV === 'test') {
  // testing
  firebase.initializeApp(firebaseConfigTesting);
} else {
  // dev / prod
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
