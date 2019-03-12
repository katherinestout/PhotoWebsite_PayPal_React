import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProfileFeed from './ProfileFeed';
import {getPosts} from '../../../actions/postActions';
import './shoots.css';


class Shoots extends Component {

  componentDidMount(){
    this.props.getPosts();

  }

  render() {

    //destructuring
    const {posts, loading} = this.props.post;
    const {profile} = this.props;
 
    let shootContent;


    if(posts === null || loading) {
      shootContent = <h4>Loading...</h4>
    } else  {
      shootContent = <ProfileFeed posts = {posts} 
      profile = {profile}
    />

    }

    return (
      <div>
        <div>
        <div>
        <div>
        
        {shootContent}
        
        </div>
        </div>
        
        </div>

        
      </div>
    );
  }
}

Shoots.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  post: state.post,
 profile: state.profile
});

export default connect(mapStateToProps, {getPosts})(Shoots);