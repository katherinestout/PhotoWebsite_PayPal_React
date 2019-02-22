import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Packages from './components/layout/photopackages/Packages.js';
import Home from './components/layout/Home';
import AboutMe from './components/layout/AboutMe';
import Shoots from './components/layout/Shoots';
import Inquiries from'./components/layout/Inquiries';
import NavBar from'./components/layout/NavBar';
import Footer from './components/layout/Footer';



class App extends Component {

  render() {

    return (
      <Router>
 
      <div className="App">
      <NavBar/>

<Route exact path = '/home' component ={Home}/>
<Route exact path = "/aboutme" component={AboutMe}/>
<Route exact path = "/inquiries" component={Inquiries}/>
<Route exact path = "/shoots" component={Shoots}/>
<Route exact path = "/packages" component={Packages}/>

<Footer/>


       

      </div>
      </Router>
    );
  }
}

export default App;