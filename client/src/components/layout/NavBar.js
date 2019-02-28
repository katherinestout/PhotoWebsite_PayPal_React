import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layoutstyles/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="button" to="/home" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <b>Home</b> 
            </Link>

        
        
            <Link className="button" to="/aboutme"
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <b>About</b> 
            </Link>
            <Link className="button" to="/packages" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <b> Packages</b> 
            </Link>
            <Link className="button" to="/inquiries"
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            <b>Inquiries</b> 
            </Link>

            <Link className="button" to="/calendar" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <b> Calendar</b> 
            </Link>

            <Link className="button" to="/downpayment" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <b>Downpayment</b> 
            </Link>

            <Link className="button" to="/portal" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <b>Customer Portal</b> 
            </Link>
        </li>
        </ul>
        
      </div>
    )
  }
}
export default NavBar;