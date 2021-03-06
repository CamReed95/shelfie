import React from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      addToInventory: [],
      name: 'Apple',
      price: $1,
      img_url: null
    }
    
  
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className='Dashboard'>Dashboard
          <div className='Product'>Product</div>
        </div>
        <div className='Form'>Form</div>
        <div className='Header'>Header</div>

       
        <button>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default App;
