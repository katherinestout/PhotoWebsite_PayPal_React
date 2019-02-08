import React, { Component } from 'react';
//import PayPal from './components/paypal/PayPal';
import './App.css';
import Packages from './components/layout/photopackages/Packages.js';



class App extends Component {

  render() {

    return (
      <div className="App">
        <Packages/>
      </div>
    );
  }
}

export default App;
