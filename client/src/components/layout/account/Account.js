import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
//import ProfileHeader from './ProfileHeader';



class Account extends Component {
   

  render() {
      //destucturing
      const {account, loading} = this.props.account;
        //const {posts} = this.props.post;
  
      //initializing profileContent
      let accountContent;
    //check to see if profile is null or loading
      if(account === null || loading){
          
          accountContent= <h4>Loading...</h4>
      } else {
          accountContent = (
                <div>
              <p>Profile content</p>
                    </div>
          )
      }

    return (
<div className="profile">
<div className="container">
<div className="card profilecard">
<div className="row">
<div className="col-md-12 profile">
{profileContent}
</div>
</div>
</div>
</div>
</div>
    )
  }
}

Account.propTypes = {
 
   account: PropTypes.object.isRequired,
   // post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    account: state.account,
   // post: state.post
})

export default connect(mapStateToProps)(Account);