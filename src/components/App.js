import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
 const [show ,hide]=useState(false);

  return (
    <div className="App" id="main">
     {
      show?<p id="para" >Hello, I've learnt to use the full-stack evaluation tool.This makes me so happy</p>:null
     }
      
      <button id="click" onClick={()=>{hide(true)}}>click here</button>
    </div>
  );
}

export default App
