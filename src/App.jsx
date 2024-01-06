import React, { useContext } from 'react';
import './App.css'
import firebaseContext from './Context/firebase/firebaseContext';

function App() {
  const Context = useContext(firebaseContext);
  const { signInUser, signUpUser } = Context;
  console.log(Context)

  return (
    <div className="App">
      <h1>Firebase App Testing</h1>
      <button onClick={() => signUpUser("harsh@gmail.com", "123456")}>
        Sign Up User
      </button>
      <button onClick={() => signInUser("harsh@gmail.com", "12345678")}>
        Sign In User
      </button>
    </div>
  );
}

export default App
