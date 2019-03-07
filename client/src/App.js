import React, { Component } from 'react';
import './App.css';
//BrowserRouter allows us to do a back button
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';

//redux
import {Provider} from 'react-redux';
import store from './store';
//layout
import Packages from './components/layout/photopackages/Packages.js';
import Home from './components/layout/Home';
import AboutMe from './components/layout/AboutMe';
import Inquiries from'./components/layout/Inquiries';

import Portal from './components/layout/Portal';
import NavBar from'./components/layout/NavBar';
import Footer from './components/layout/Footer';
import ThankYouEmail from './components/layout/thankyou/ThankYouEmail';

import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';
import Calendar from './components/layout/auth/Calendar';
import Downpayment from './components/layout/auth/Downpayment';

import PrivateRoute from './components/common/PrivateRoute';

import Dashboard from './components/layout/auth/Dashboard';
import CreateProfile from './components/layout/create-profile/CreateProfile';
import  EditProfile  from './components/layout/edit-profile/EditProfile';
import { clearCurrentProfile } from './actions/profileActions';

import Profile from './../src/components/layout/profile/Profile';
import Profiles from './components/layout/profile/Profiles';

import Posts from './components/layout/posts/Posts';




//check for jwt token
if(localStorage.jwtToken) {
  //setting auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decoding the jwt token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
//then want to logout the user
store.dispatch(logoutUser());

store.dispatch(clearCurrentProfile());
  }
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

              <Route exact path ="/profiles" component ={ Profiles }/>
              <Route exact path ="/profile/:email" component ={ Profile }/>

              </div>
      
      <Switch>
      <PrivateRoute exact path ="/dashboard" component ={ Dashboard }/>
      </Switch>

      <Switch>
      <PrivateRoute exact path ="/createprofile" component ={ CreateProfile }/>
      </Switch>

      <Switch>
      <PrivateRoute exact path ="/editprofile" component ={ EditProfile }/>
      </Switch>

      <Switch>
      <PrivateRoute exact path ="/feed"
       component ={ Posts}/>
      </Switch>
           
            <Footer/>
      </div>
      
      </Router>
      </Provider>
    );
  }
}

export default App;
