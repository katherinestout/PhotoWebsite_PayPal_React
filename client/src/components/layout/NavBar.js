import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layoutstyles/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="btn" to="/home" 
                style={{ textDecoration: 'none', color: 'black'}}>
            Home
            </Link>

            <Link className="btn" to="/shoots" 
                style={{ textDecoration: 'none', color: 'black'}}>
            Photoshoots
            </Link>
        
            <Link className="btn" to="/aboutme"
                style={{ textDecoration: 'none', color: 'black'}}>
            About
            </Link>
            <Link className="btn" to="/packages" 
                style={{ textDecoration: 'none', color: 'black'}}>
            Packages
            </Link>
            <Link className="btn" to="/inquiries"
                style={{ textDecoration: 'none', color: 'black'}}>
            Inquiries
            </Link>

            <Link className="btn" to="/cart" 
                style={{ textDecoration: 'none', color: 'black'}}>
            Cart
            </Link>
        </li>
        </ul>
        
      </div>
    )
  }
}
export default NavBar;