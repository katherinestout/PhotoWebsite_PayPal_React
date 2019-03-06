import React, { Component } from 'react';
//import isEmpty from './../../validation/is-empty';
import {Link} from 'react-router-dom';


class ProfileHeader extends Component {
  render() {
      const {profile} = this.props;

    return (
      <div >
        <div>
        <h1>
        {profile.user.name}</h1>
       

        <Link to ="/editprofile" className="btn btn-dark edit">Edit Contact Info</Link>
     
          

        <p>My Shoots:</p>
        
        </div>
      </div>
    )
  }
}



export default ProfileHeader;