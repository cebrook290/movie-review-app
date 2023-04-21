import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Movie from './components/Movie';




function App() {

  return (
    <div className='app'>
      <h1>Marvel Avengers Movie Review List</h1>
      <br></br>
      <Movie />
      <br></br>      
      
    </div>
  )
  
 
  
}



export default App;
