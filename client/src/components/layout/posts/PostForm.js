import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import TextFieldGroup from '../../common/TextFieldGroup';
import {addPost} from '../../../actions/postActions';
import './postform.css';

class PostForm extends Component {

constructor(props){
    super(props);
    this.state={
        typeShoot: '',
        date: '',
        time: '',
        errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

//where it does the actual error checking
//when it shows up on the screen
componentWillReceiveProps(newProps){
  if(newProps.errors){
    this.setState({errors: newProps.errors })
  } 

}

onSubmit(e){
  e.preventDefault();

  const {user} = this.props.auth;

  //const {profile} = this.props.profile;
 

  const newPost = {
    typeShoot: this.state.typeShoot,
    name: user.name,
    date: this.state.date,
    time: this.state.time,
    email: user.email
 
  };

  this.props.addPost(newPost);
  //clearing the text field
  this.setState({typeShoot: '', date: '', time: ''});
  this.props.history.push("/thankyoupostform");
} 

onChange(e){
  this.setState({[e.target.name]: e.target.value});
}

  render() {
//destructuring
    const{errors} = this.state;

    return (
      <div className="postform">
      <div>
        <h2><b>Photoshoot request:</b></h2>
        <h4><b>
   Please enter your best availability, based on the calendar.
      </b></h4>

<a href="https://calendar.google.com/calendar/embed?src=h1seqdml941hl46vrvfl612las%40group.calendar.google.com&ctz=America%2FNew_York">
<button className="btn calendarlink">
<b>View the calendar </b>
</button>
</a>

      </div>
    
    
      <form onSubmit = {this.onSubmit} className="postformform">

          <div>

          <TextAreaFieldGroup
          placeholder="Type of shoot"
          name="typeShoot"
          value= {this.state.typeShoot}
          onChange={this.onChange}
          error ={errors.text}
          />


        <TextFieldGroup
          placeholder="Available date"
          name="date"
          value= {this.state.date}
          onChange={this.onChange}
          error ={errors.text}
          />


<TextFieldGroup
          placeholder="Available time range"
          name="time"
          value= {this.state.time}
          onChange={this.onChange}
          error ={errors.text}
          />

          </div>
          <button type="submit" className="btn btn-dark">
          <b>Submit</b>
        
          </button>
      </form>
      </div>
    
    )
  }
}
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
 // profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
 // profile: state.profile
});
export default withRouter(connect(mapStateToProps, {addPost})(PostForm));