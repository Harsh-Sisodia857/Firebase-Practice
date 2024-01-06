import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC9mke1HTYB_pYGhxQ3LEifBALtJViDuF0",
    authDomain: "practicing-85f01.firebaseapp.com",
    projectId: "practicing-85f01",
    storageBucket: "practicing-85f01.appspot.com",
    messagingSenderId: "1092597183903",
    appId: "1:1092597183903:web:4c0af97060bd45afeaf9aa",
    databaseURL: "https://practicing-85f01-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
