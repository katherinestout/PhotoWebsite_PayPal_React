import React, { Component } from 'react';
import ShootItem from './ShootItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProfileFeed extends Component {

    render() {
        //destructuring taking the posts out of props
        //map through posts passed into postcontent in Posts.js

      const {posts} = this.props;
   
      const {profile} = this.props.profile;
     

//filtering through all posts and matching them to the current profile's handle
//putting them in myposts
function filterpost(post){
  if (post.email === profile.email){
    return posts;
  }
}

const myPosts = posts.filter(filterpost);

//mapping through all of the posts that belong to the current user

          return myPosts.map(
                  post=> <ShootItem key = {post._id} post = {post}
                  profile = {profile}
                />
                    );
                    
                  }
                }
              
    ProfileFeed.propTypes = {
        posts: PropTypes.array.isRequired,
        profile: PropTypes.object.isRequired
    }



    const mapStateToProps = state => ({

    profile: state.profile
  
  });
export default connect (mapStateToProps)(ProfileFeed);