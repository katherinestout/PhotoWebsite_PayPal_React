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

  //{isAthenticated && isAdmin ? adminLinks : guestlinks}
/* if (isAuthenticated && isAdmin){
      adminLinks
} else if (isAuthenticated){
  authLinks
} else {
  guestLinks
}
*/
// if (user.email === admin@gmail.com){adminLinks} else {authLinks}

  render() {

    const {isAuthenticated, user} = this.props.auth;
  
   console.log(this.props.auth.user.email);

  
//guest links
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

    //auth links
    const authLinks = (
     
      <nav>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">

      <Link className="button" to={`/profile/${this.props.auth.user.email}`}  
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b>{user.name}</b> 
          </Link>
      
          <Link className="button" to="/request"
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b> Schedule your Shoot</b>
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
//admin links
    const adminLinks = (
      <nav>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">

        <Link className="button" to="/feed"
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b> Photoshoot requests</b>
          </Link>

          <Link className="button" to="/profiles" 
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
         <b> Contacts</b> 
          </Link>

          <a href="/home" onClick={this.onLogoutClick.bind(this)} className="button"
          style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b>logout</b>
          </a>
      </li>
      </ul>
      </nav>
    );

    const renderLinks = () => {
      //for the admin link, if the username is admin you get admin nav links
      //not totally secure with just username but for this project purpose it works
        const adminA = 'admin';
        let adminB = `${this.props.auth.user.name}`;
        console.log(adminB);
        
        //switching between admin, user/auth, and guest links

      if (adminA === adminB){
       return adminLinks;

      } else if (isAuthenticated) {
        return authLinks;

      } else {
       return guestLinks;
      }
   
    } 

    return (
      <div>
        
       {renderLinks()}
        
      </div>
    )
  }
}



NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
  
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(NavBar);