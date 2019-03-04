import React from 'react';
import {Link} from 'react-router-dom';

const AccountActions = () => {
  return (
    <div>
      <Link to ="/edit-account" className="btn btn-dark">Edit Account</Link>
    
    </div>
  );
};

export default AccountActions;