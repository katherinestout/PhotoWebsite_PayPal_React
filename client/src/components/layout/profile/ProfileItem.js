import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './profileitem.css';


//passing in each profile to display on Profiles

class ProfileItem extends Component {
  render() {
      const{profile} = this.props;
      
    return (
      <div> 
        <div className ="profile-item card">
        <p>{profile.user.name}</p>
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