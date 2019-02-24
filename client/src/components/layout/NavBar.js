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
            Home
            </Link>

            <Link className="button" to="/shoots" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Photoshoots
            </Link>
        
            <Link className="button" to="/aboutme"
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            About
            </Link>
            <Link className="button" to="/packages" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Packages
            </Link>
            <Link className="button" to="/inquiries"
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Inquiries
            </Link>

            <Link className="button" to="/calendar" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Calendar
            </Link>

            <Link className="button" to="/downpayment" 
                style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Downpayment
            </Link>
        </li>
        </ul>
        
      </div>
    )
  }
}
export default NavBar;