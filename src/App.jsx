import { useState } from "react";
import React from 'react';
import axios from "axios";
import './index.css';


function App() {
  const[setup, setSetup] = useState('Jokes Setup')
  const[punchline, setPunchline] = useState('Jokes Punchline')
  const handleClick = () => {
    const options = {method: 'GET', url: 'https://official-joke-api.appspot.com/random_joke'};
    axios.request(options)
    .then(function (response) 
      {
        setSetup(response.data.setup);
        setPunchline(response.data.punchline);
      }
    );
    
  }


  return (
    <div className="app">
      <div className="container">
        <div className="setup">{ setup }</div>
        <div className="punchline">{ punchline }</div>
        <button onClick = {handleClick} className='btn'>Random Jokes!</button>
      </div>
    </div>
  );
}

export default App;
