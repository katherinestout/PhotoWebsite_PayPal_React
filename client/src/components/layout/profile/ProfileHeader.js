import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './profileheader.css';


class ProfileHeader extends Component {
  render() {
      const {profile} = this.props;

    return (
      <div >
        <div>
        <h1> 
        {profile.user.name}</h1>
      
     <br></br>
        <h3> Email: {profile.user.email}</h3> 
        <h5> Phone:  <i>{profile.phone}</i></h5>

        <Link to ="/editprofile" className="editcontact btn"
        style={{ textDecoration: 'none', color: 'whitesmoke'}}>
        <b>Edit Contact Info</b></Link>
   
        <hr></hr>
        <p><b>My Upcoming Shoots:</b></p>
      <p>If confirmed, the check will be green.</p>
      <hr></hr>
        
        </div>
      </div>
    )
  }
}



export default ProfileHeader;