import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layoutstyles/portal.css';

export class Portal extends Component {
  render() {
    return (
      <div className="portal">
      <h1><b>Welcome to the Photo Portal!</b></h1>
      <br></br>
      <p><b>If you don't already have an account, sign up!</b></p>
      <p>Signing up allows you to schedule a photoshoot and see my availability. This way there
        isn't a ton of back and fourth, and it is fairly straighforward to see what days and times
        work for us both. This is also how you can make a downpayment, as well as recieve edited photos.</p>
      <p>In general, making an account makes the proccess whole lot easier.</p>
      <p> <i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>

        <br></br>
        <p>
        <Link to = '/login' 
        className="button" 
        style={{ textDecoration: 'none', color: 'whitesmoke'}}> 
       Login </Link>

        <Link to = '/register' 
        className="button" 
        style={{ textDecoration: 'none', margin: '5%', color: 'whitesmoke'}}> 
       Register</Link>
        </p>
      
      </div>
    )
  }
}

export default Portal;
