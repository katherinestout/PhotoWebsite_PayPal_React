import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import PostFeed from './PostFeed';
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
        <h2><b>Unconfirmed:</b></h2>
<Unconfirmed posts = {posts}/>

      <h2><b>Confirmed:</b></h2>
<Confirmed posts = {posts}/>
        
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