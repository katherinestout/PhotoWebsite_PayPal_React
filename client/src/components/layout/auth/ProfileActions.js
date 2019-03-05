import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div>
      <Link to ="/editprofile" className="btn btn-dark">Edit Profile</Link>
    
    </div>
  );
};

export default ProfileActions;