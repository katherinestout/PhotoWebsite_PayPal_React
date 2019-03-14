import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {deletePost, 
    addLike} from '../../../actions/postActions';


 class PostItem extends Component {
     
     onDeleteClick(id){
         this.props.deletePost(id);
     }

     onLikeClick(id){
         this.props.addLike(id);

     }
   
     //find out if user liked already

     findUserLike(likes){
         const {auth} = this.props;

         if(likes.filter(like => like.user === auth.user.id).length > 0){
            return true;
         } else {
             return false;
         }
  
     }


  render() {
      const {post, auth} = this.props;


    return (
      <div>
        <div className="card">
        <div>
          <div>
            <br />
            <p>

            <Link to={`/profile/${post.email}`}style={{textDecoration: 'none', color:'black'}}  >
           {post.email}
            </Link>

            </p>

          </div>
          <div className="col-md-10">
            <p> {post.typeShoot}</p>
            <p> {post.time}</p>
            <p> {post.date}</p>
            <p>{post.email}</p>

            
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
             
                  <i
                    className={classnames('far fa-check-square', {
                      'text-info': this.findUserLike(post.likes)
                    })}
                  />
                  
                  <span className="badge badge-light">
                  {post.likes.length}</span>
                </button>


                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
          </div>
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
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
   
});

export default connect(mapStateToProps, {deletePost, addLike})(PostItem);