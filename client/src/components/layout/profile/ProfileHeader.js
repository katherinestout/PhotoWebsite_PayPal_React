import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class ProfileHeader extends Component {
  render() {
      const {profile} = this.props;

    return (
      <div >
        <div>
        <h1>
        {profile.user.name}</h1>
        <h3> {profile.user.email}</h3> 
        <h5> <i>{profile.phone}</i></h5>

        <Link to ="/editprofile" className="btn btn-dark edit">Edit Contact Info</Link>
     
          

        <p>My Upcoming Shoots:</p>
        
        </div>
      </div>
    )
  }
}



export default ProfileHeader;