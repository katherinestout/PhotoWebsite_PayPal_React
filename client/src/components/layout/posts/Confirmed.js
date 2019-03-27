import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';


class Confirmed extends Component {

  render() {
    //destructuring taking the posts out of props
    //map through posts passed into postcontent in Posts.js
  const {posts} = this.props;

  function filterthis(post){
    if(post.likes.length > 0){
      return posts;
    }
  }

  const thisPosts = posts.filter(filterthis);


    return thisPosts.map(

  post=> <PostItem key = {post._id} post = {post} 
  likes={post.likes}
 
 />
    );
  }
}

Confirmed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Confirmed;