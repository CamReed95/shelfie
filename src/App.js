import React from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <div className='Dashboard'>
          <div className='Product'></div>
        </div>
        <div className='Form'></div>
        <div className='Header'></div>
        
      </div>
    );
  }
}

export default App;
