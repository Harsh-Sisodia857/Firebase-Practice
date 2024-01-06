import React from 'react';
import { app } from './firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import './App.css'

function App() {
  // creating instance which help us to interact with database
  const auth = getAuth(app);
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "harsh@gmail.com", "123456").then((val) => {
      console.log(val);
      alert("Successfully Created User");
    }).catch(err =>{
      console.log(err);
    })
  }
  const signInUser = () => {
    signInWithEmailAndPassword(auth, "harsh@gmail.com", "123456")
      .then((val) => {
        console.log(val);
        alert("Successfully Login User");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <h1>Firebase App Testing</h1>
      <button onClick={signUpUser}>Sign Up User</button>
      <button onClick={signInUser}>Sign In User</button>
    </div>
  );
}

export default App
