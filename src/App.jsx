import React from 'react';
import { app } from './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  return (
    <div className="App">
      <h1>Firebase App Testing</h1>
      <button onClick={signUpUser}>Sign Up User</button>
    </div>
  );
}

export default App
