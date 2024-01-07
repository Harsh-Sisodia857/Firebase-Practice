import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import firebaseContext from "./firebaseContext";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
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
const fireStore = getFirestore(app);
const FirebaseState = (props) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const writeDataToFireStore = async () => {
    try {
      const result = await addDoc(collection(fireStore, "cities"), {
        City: "Noida",
        Pincode: 203174,
      });
      console.log("Document written with ID: ", result);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const writeDataToFireStoreWithSubCollection = async () => {
    try {
      const result = await addDoc(collection(fireStore, "cities/5RdfsXDrWhNRekdq9FGU/places"), {
        Name: "Sector 62",
        Description: "Fortis Hospital,Jaypee Engineering College,PW Pathshala",
        Date : Date.now()
      });
      console.log("Document written with ID: ", result);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readDataFromFireStore = async () => {
    const citiesRef = doc(fireStore, "cities","5RdfsXDrWhNRekdq9FGU");
    const docSnap = await getDoc(citiesRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

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

  useEffect(() => {
    // to check whether user is logged in or not
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is Logged In");
      } else {
        console.log("User is Not Logged In");
      }
    });
  }, []);

  const LoggedOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <firebaseContext.Provider
      value={{
        signInUser,
        signUpUser,
        signUpWithGoogle,
        LoggedOut,
        writeDataToFireStore,
        writeDataToFireStoreWithSubCollection,
        readDataFromFireStore,
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};

export default FirebaseState;
