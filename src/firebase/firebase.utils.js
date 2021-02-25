import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmbC8H8Nj377bHZKs2l7gpi1G2G4N_PTY",
    authDomain: "crwn-db-80888.firebaseapp.com",
    projectId: "crwn-db-80888",
    storageBucket: "crwn-db-80888.appspot.com",
    messagingSenderId: "214403618949",
    appId: "1:214403618949:web:8b2bf610583454a41f31ec",
    measurementId: "G-4C2JP4GH6F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
