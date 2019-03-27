import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../../actions/postActions';
import './posts.css';
import Unconfirmed from './Unconfirmed';
import Confirmed from './Confirmed';

class Posts extends Component {

  componentDidMount(){
    this.props.getPosts();

  }

  render() {
    //destructuring
    const {posts, loading} = this.props.post;
 
    let postContent;

    if(posts === null || loading) {
      postContent = <h4>Loading...</h4>
    } else {
      postContent =
      <div>
        <div className="posts-top">
         <h2><b>Requests</b></h2>
        <p>Check your schedule:
        <a href="https://calendar.google.com/calendar/embed?src=h1seqdml941hl46vrvfl612las%40group.calendar.google.com&ctz=America%2FNew_York">
        <button className="btn mycalendarlink">
        <b>View the calendar: </b>
        </button>
        </a> </p>
        </div>
        <div className="container">
        <div className="row">
        <div className="col">

        <h2 className="center"><b>Unconfirmed:</b></h2>
        </div>
        <div className="col">

        <h2 className="center"><b>Confirmed:</b></h2>
        </div>
        </div>

        <div className="row">

        <div className="col unconfirmedposts">

        <Unconfirmed posts = {posts}/>
        </div>

        <div className="col confirmedposts">

        <Confirmed posts = {posts}/>
        
        </div>
        </div>
        </div>
      </div>
    }

    return (
      <div className="postfeed">
        <div className="container">
        {postContent}
        </div>  
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts})(Posts);