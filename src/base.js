import * as firebase from "firebase/app";
import "firebase/storage";

//dibagian ini ya temen2 di ganti settingannya kalian, ada satu lagi di firebasenya bagian file firebase.json sama dengan firebase storage rules
const firebaseConfig = {
    apiKey: "AIzaSyAuifv13M-x5Ah1-T__FXU_r3DnCtNhgRA",
    authDomain: "save-the-seas.firebaseapp.com",
    projectId: "save-the-seas",
    storageBucket: "save-the-seas.appspot.com",
    messagingSenderId: "949958534473",
    appId: "1:949958534473:web:e8352fa62c93e5555a2698",
    measurementId: "G-G1WWKQC1F6",
};

export const app = firebase.initializeApp(firebaseConfig);
