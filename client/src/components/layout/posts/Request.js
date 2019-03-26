import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PostForm from './PostForm';


class Request extends Component {


  render() {


    return (
      <div>
        <div className="container">
        <div>
        <div>
        
        <PostForm/>

        
        </div>
        </div>
        
        </div>

        
      </div>
    );
  }
}

Request.propTypes = {
  
  post: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps)(Request);