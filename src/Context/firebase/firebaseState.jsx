import { initializeApp } from "firebase/app";
import firebaseContext from "./firebaseContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9mke1HTYB_pYGhxQ3LEifBALtJViDuF0",
  authDomain: "practicing-85f01.firebaseapp.com",
  projectId: "practicing-85f01",
  storageBucket: "practicing-85f01.appspot.com",
  messagingSenderId: "1092597183903",
  appId: "1:1092597183903:web:4c0af97060bd45afeaf9aa",
  databaseURL: "https://practicing-85f01-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

const FirebaseState = (props) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => {
        console.log(val);
        alert("Successfully Created User");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInUser = (email, password) => {
    console.log("SIGN IN : ", email);
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => {
        console.log(val);
        alert("Successfully Login User");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <firebaseContext.Provider
      value={{ signInUser, signUpUser, signUpWithGoogle }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};

export default FirebaseState;
