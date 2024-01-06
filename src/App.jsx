import React from 'react';
import { app } from './firebase'
import { getDatabase, set,ref } from 'firebase/database'
import './App.css'

function App() {
  // creating instance which help us to interact with database
  const db = getDatabase(app);
  const sendData = () => {
    set(ref(db, "users/harsh"), {
      id: 1,
      name : "Harsh",
      course : "B.Tech"
    })
  }
  return (
    <div className='App'>
      <h1>Firebase App Testing</h1>
      <button onClick={sendData}>Send Data To Firebase</button>
    </div>
  )
}

export default App
