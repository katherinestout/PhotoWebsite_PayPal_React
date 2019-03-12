import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layoutstyles/navbar.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';


class NavBar extends Component {
  
  
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  }

  render() {

    const {isAuthenticated, user} = this.props.auth;
    //const {profile} = this.props.profile;
    //const {email} = this.props.profile;
   //const{profile} = this.props.profile;
   console.log(this.props.auth.user.email);
 
  
   
  

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


      <Link className="button" to={`/profile/${this.props.auth.user.email}`}  
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b>{user.name}</b> 
          </Link>
      
        <Link className="button" to="/feed"
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b> Quotes Feed</b>
          </Link>

          <Link className="button" to="/request"
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b> Schedule your Shoot</b>
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
  auth: PropTypes.object.isRequired,
  //getProfileByEmail: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
  
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(NavBar);