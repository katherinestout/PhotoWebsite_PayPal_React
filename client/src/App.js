import React, { Component } from 'react';
import './App.css';
//BrowserRouter allows us to do a back button
import { BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';
//redux
import {Provider} from 'react-redux';
import store from './store';
//layout
import Packages from './components/layout/photopackages/Packages.js';
import Home from './components/layout/Home';
import AboutMe from './components/layout/AboutMe';
import Downpayment from './components/layout/Downpayment';
import Inquiries from'./components/layout/Inquiries';
import Calendar from './components/layout/Calendar';
import Portal from './components/layout/Portal';
import NavBar from'./components/layout/NavBar';
import Footer from './components/layout/Footer';
import ThankYouEmail from './components/layout/thankyou/ThankYouEmail';

import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';

//check for token
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {

  render() {

    return (
      <Provider store = {store}>
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
              <Route exact path ="/portal" component={Portal}/>

              <Route exact path ="/thankyouemail" component={ThankYouEmail}/>
              <div className="container">
              <Route exact path ="/register" component={Register}/>
              <Route exact path ="/login" component={Login}/>

              </div>
           
            <Footer/>
      </div>
      
      </Router>
      </Provider>
    );
  }
}

export default App;
