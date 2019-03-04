import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layoutstyles/navbar.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';

class NavBar extends Component {

  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {

    const {isAuthenticated, user} = this.props.auth;

    const guestLinks = (
      
      <nav>
      <ul className="navbar-nav mr-auto">
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

          <Link className="button" to="/portal" 
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b>Customer Portal</b> 
          </Link>
      </li>
      </ul>
      </nav>
    );
    const authLinks = (
      <nav>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">

        <Link className="button" to="/dashboard" 
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b>{user.name}</b> 
          </Link>

          <Link className="button" to="/calendar" 
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b> Calendar</b> 
          </Link>

          <Link className="button" to="/downpayment" 
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b>Downpayment</b> 
          </Link>

          <a href="/home" onClick={this.onLogoutClick.bind(this)} className="button"
          style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b>logout</b>
          </a>
      </li>
      </ul>
      </nav>
    );

    return (
      <div>
        
       {isAuthenticated ? authLinks : guestLinks}
        
      </div>
    )
  }
}
NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(NavBar);