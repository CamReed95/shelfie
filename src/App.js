import React from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <div className='Dashboard'></div>
      <div className='Form'></div>
      <div className='Header'></div>
      <div className='Product'></div>
    </div>
  );
}

export default App;
