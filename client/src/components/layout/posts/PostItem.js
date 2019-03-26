import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {deletePost, 
    addLike} from '../../../actions/postActions';
import './postitem.css';

 class PostItem extends Component {
   //state = {
     //clickedArray: []
   //}
     
     onDeleteClick(id){
         this.props.deletePost(id);
     }

    
     onLikeClick(id){
      this.props.addLike(id);
   
  }
/*
  handleClick(likes){
    let clickedArray = this.state.clickedArray;
    
    const auth = this.props;
//if the likes are greater than one, push to clicked array
    if(likes.filter(like => like.user === auth.user.id).length > 0){
      clickedArray.push(auth.user.id) && console.log(clickedArray);
    } else {
      return false;
    }
   
  }

*/
/*
handleClick(likes, post){
  let clickedArray = this.state.clickedArray;
  const auth = this.props;
  //if post.likes is greater than 0 add to clicked array
  if(post.likes > 0){
    clickedArray.push(auth.user.id) && console.log('clicked arr' + clickedArray);

  } else {
    console.log('dunno');
  }
}
*/
  //function that triggers the confirmed and adds to clickedArray
     clickWrapper = (id) =>{
      this.onLikeClick(id);
      //this.handleClick(id);
     }

     //find out if user liked already

     findUserLike(likes){

         const {auth} = this.props;
         //let clickedArray = this.state.clickedArray;

         if(likes.filter(like => like.user === auth.user.id).length > 0){
            return true;
            // && clickedArray.push(auth.user.id) && console.log(clickedArray);
         } else {
          //clickedArray.push(auth.user.id) && console.log('clicked array' + clickedArray);
          return false;
         }
  
     }

     /*
     confirmedUnconfirmed(likes){
      let clickedArray = this.state.clickedArray;
      //if a post has a like or more than one like, add it to confirmed, console log
      //else, add it to unconfirmed
      if(Posts.filter){
        unconfirmedArray.push(auth.user.id) && console.log('clicked array' + unconfirmedArray);
      } else {
        clickedArray.push(auth.user.id) && console.log('clicked array' + clickedArray);
      }
       
     }
*/
 

  render() {
      const {post, auth} = this.props;


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
                  onClick={this.clickWrapper.bind(this, post._id)} 
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
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {deletePost, addLike})(PostItem);