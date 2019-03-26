import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
//import ConfirmedUnconfirmed from './ConfirmedUnconfirmed';
import "./postfeed.css";


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
      <div className="postfeed">
      <div className="postfeedtop">
      
        <h2><b>Requests</b></h2>
        <p>Check your schedule:
        <a href="https://calendar.google.com/calendar/embed?src=h1seqdml941hl46vrvfl612las%40group.calendar.google.com&ctz=America%2FNew_York">
        <button className="btn mycalendarlink">
        <b>View the calendar: </b>
        </button>
        </a> </p>
        </div>

        <div className="unconfirmed">
        <p><b>Unconfirmed</b></p>
        {postPost}
        </div>

        <div className="confirmed">
        <p><b>Confirmed</b></p>
        </div>
      </div>
    )


  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostFeed;