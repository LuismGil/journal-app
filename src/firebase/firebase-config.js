import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: 'AIzaSyAPo-WAc4SGQ4D4LbFwymkDDVQX7b-Zx5hs',
//   authDomain: 'react-testings-981ea.firebaseapp.com',
//   projectId: 'react-testings-981ea',
//   storageBucket: 'react-testings-981ea.appspot.com',
//   messagingSenderId: '856201897362',
//   appId: '1:856201897362:web:0b47a242b31459c8958d4b',
// };

// if (process.env.NODE_ENV === 'test') {
//   // testing
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   // dev / prod
//   firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
