import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Packages from './components/layout/photopackages/Packages.js';
import Home from './components/layout/Home';
import AboutMe from './components/layout/AboutMe';
import Downpayment from './components/layout/Downpayment';
import Inquiries from'./components/layout/Inquiries';
import Calendar from './components/layout/Calendar';
import NavBar from'./components/layout/NavBar';
import Footer from './components/layout/Footer';

import ThankYouEmail from './components/layout/thankyou/ThankYouEmail';



class App extends Component {

  render() {

    return (
      <Router>
 
      <div className="App">
            <NavBar/>

              <Route exact path = '/' component ={Home}/>
              <Route exact path ='/home' component={Home}/>
              <Route exact path = "/aboutme" component={AboutMe}/>
              <Route exact path = "/inquiries" component={Inquiries}/>
              <Route exact path = "/packages" component={Packages}/>
              <Route exact path ="/calendar" component={Calendar}/>
              <Route exact path = "/downpayment" component={Downpayment}/>

              <Route exact path ="/thankyouemail" component={ThankYouEmail}/>

            <Footer/>
      </div>
      
      </Router>
    );
  }
}

export default App;
