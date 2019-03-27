import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';


class Unconfirmed extends Component {

  render() {
    //destructuring taking the posts out of props
    //map through posts passed into postcontent in Posts.js
  const {posts} = this.props;

  function filterthat(post){
    if(post.likes.length === 0){
      return posts;
    }
  }

  const thatPosts = posts.filter(filterthat);

    return thatPosts.map(

  post=> <PostItem key = {post._id} post = {post} 
  likes={post.likes}
 
 />
    );
  }
}

Unconfirmed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Unconfirmed;