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

        <br></br>
        <Link to ="/editprofile" className="editcontact button"
        style={{ textDecoration: 'none', color: 'whitesmoke'}}>
        Edit Contact Info</Link>

        <br></br>
        <br></br>
          

        <p>My Upcoming Shoots:</p>
        
        </div>
      </div>
    )
  }
}



export default ProfileHeader;