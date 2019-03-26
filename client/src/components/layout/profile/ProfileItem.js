import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';


//passing in each profile to display on Profiles

class ProfileItem extends Component {
  render() {
      const{profile} = this.props;
      
    return (
      <div className ="card card-body"> 
        <div className="profiles-body">
        <p className="cap">{profile.user.name}</p>
        <p>Phone: {profile.phone} 
         </p>
         <p>Email: {profile.email}</p>
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;