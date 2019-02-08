import React, { Component } from 'react';
import PayPal from './components/paypal/PayPal';
import './App.css';



class App extends Component {

  render() {
    
    return (
      <div className="App">
        <PayPal/>
      </div>
    );
  }
}

export default App;
