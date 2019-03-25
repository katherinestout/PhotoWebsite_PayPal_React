import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
//import ConfirmedUnconfirmed from './ConfirmedUnconfirmed';


class PostFeed extends Component {
/*  state = {
    clickedArray: []
  }*/

  render() {
    //destructuring taking the posts out of props
    //map through posts passed into postcontent in Posts.js
  const {posts} = this.props;
  //const {clickedArray} = this.state.clickedArray;
  //console.log(this.state.clickedArray);

    const postPost = ( posts.map(
      post=> <PostItem key = {post._id} post = {post} 
     />));

   // const clickedClicked = (clickedArray);

    return (
      <div>
        <p>Unconfirmed:</p>
        {postPost}
        <p>Confirmed:</p>
    
      </div>
    )


  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostFeed;