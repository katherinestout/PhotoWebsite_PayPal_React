import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import {getProfileByEmail} from '../../../actions/profileActions';
//import {getPosts} from '../../actions/postActions';
//import ProfileFeed from '../profilePosts/ProfileFeed';


class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.email){
            //check for the handle to match
                this.props.getProfileByEmail(this.props.match.params.email);
        }
    }


  render() {
      //destucturing
      const {profile, loading} = this.props.profile;
      //const {posts} = this.props.post;
  
      //initializing profileContent
      let profileContent;
    //check to see if profile is null or loading
      if(profile === null || loading){
          profileContent= <h4>Loading...</h4>
      } else {
          profileContent = (
                <div>
                    <div>
                    <div>
                
                
                    </div>
                    <div/>
                    </div>
                    <ProfileHeader profile = {profile}/>
                  
            
              
                </div>
          )
      }

    return (
<div className="profile">
<div className="container">
<div>
<div>
<div className="profile">
{profileContent}
</div>
</div>
</div>
</div>
</div>
    )
  }
}

Profile.propTypes = {
   
    //getPosts: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
  
}

const mapStateToProps = state => ({
    profile: state.profile,
 
})

export default connect(mapStateToProps, {getProfileByEmail})(Profile);