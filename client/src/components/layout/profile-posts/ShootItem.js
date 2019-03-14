import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {deletePost} from '../../../actions/postActions';
import './shoots.css';


 class ShootItem extends Component {
     
     onDeleteClick(id){
         this.props.deletePost(id);
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
        <div>
        <div>
          <div>
          <p> {post.typeShoot}</p>
            <p> {post.time}</p>
            <p> {post.date}</p>
                <button
                  type="button"
                  className="btn btn-light"
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
                    className="btn btn-danger"
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

ShootItem.propTypes = {
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, {deletePost})(ShootItem);