import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import {getProfileByEmail} from '../../../actions/profileActions';
import {getPosts} from '../../../actions/postActions';
import ProfileFeed from '../../layout/profile-posts/ProfileFeed';
import './profile.css';


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
      const {posts} = this.props.post;
  
      //initializing profileContent
      let profileContent;
    //check to see if profile is null or loading
      if(profile === null || loading){
          profileContent= <h4>Loading...</h4>

      } else {
          profileContent = (
                <div className="profilecontent card">
                <div className="profileheader">  
                <ProfileHeader profile = {profile}/></div>
                  <div className="profilefeed">
                <ProfileFeed posts = {posts}/></div>
                </div>
          )
      }

    return (
<div className="profile">

{profileContent}

</div>
    )
  }
}

Profile.propTypes = {
    getProfileByEmail: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  
}

const mapStateToProps = state => ({
    profile: state.profile,
    post: state.post
 
})

export default connect(mapStateToProps, {getProfileByEmail, getPosts})(Profile);