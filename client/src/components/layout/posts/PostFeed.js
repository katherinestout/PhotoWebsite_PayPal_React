import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import "./postfeed.css";

class PostFeed extends Component {
  render() {
    //destructuring taking the posts out of props
    //map through posts passed into postcontent in Posts.js
  const {posts} = this.props;

//filtering through
   function confirmed(post){
     if(post.likes.length > 0){
       return posts;
     }
     else{
       console.log('no confirmed');
     }
   }

   const confirmedPosts = posts.filter(confirmed);

   const confirmed = (confirmedPosts.map(
     post=> <PostItem key = {post._id} post = {post} likes={post.likes}/>
   ));
   
   
//filtering through
   function unConfirmed(post){
    if(post.likes.length < 0){
      return posts;
    }
    else {
      console.log('idk');
    }
  }

  const unConfirmedPosts = posts.filter(unConfirmed);

  const unConfirmed = (unConfirmedPosts.map(
    post=> <PostItem key = {post._id} post = {post} likes={post.likes}/>
  ));

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
        {unConfirmed}
        </div>

        <div className="confirmed">
        <p><b>Confirmed</b></p>
        {confirmed}
       
        </div>
      </div>
    )


  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostFeed;