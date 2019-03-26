import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {deletePost, 
    addLike} from '../../../actions/postActions';
import './postitem.css';

 class PostItem extends Component {

     onDeleteClick(id){
         this.props.deletePost(id);
     }

     onLikeClick(id){
      this.props.addLike(id);
  }

     findUserLike(likes){

         const {auth} = this.props;

         if(likes.filter(like => like.user === auth.user.id).length > 0){
            return true;
         } else {
          return false;
         }
     }


  render() {

      const {post} = this.props;

    return (
     
        <div className="postitem">
        <div>
          <div>
            <br />
            <p>

            <Link to={`/profile/${post.email}`}style={{textDecoration: 'none', color:'black'}}  >
           {post.email}
            </Link>

            </p>

          </div>
          <div>
            <p>{post.name}</p>
            <p> {post.typeShoot}</p>
            <p> {post.time}</p>
            <p> {post.date}</p>
            <p>{post.email}</p>

            
                <button
                  onClick={this.onLikeClick.bind(this, post._id)} 
                  type="button"
                  className= {classnames("btn", {'btn-info': this.findUserLike(post.likes)})}
                >
               <b >Confirm Request</b> 
             </button>
            
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                    style ={{margin: '5%'}}
                  >
                  <b>Delete Request</b>
                  </button>
           
          </div>
        </div>
      </div>
    
    )
  }
}

PostItem.propTypes = {
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {deletePost, addLike})(PostItem);