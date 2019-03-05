import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
//import InputGroup from '../common/InputGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
//import isEmpty from '../../validation/is-empty';
//import { withRouter } from 'react-router';

export class EditProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getCurrentProfile();
    }

//error might be here
    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        if(nextProps.profile.profile){
            const profile = nextProps.profile.profile;
          
        
        //set component fields state
        this.setState({
           phone: profile.phone,
        });
        
        }
    }

    onSubmit(e){
        e.preventDefault();
      const profileData = {

        phone: this.state.phone,
       

      };

      this.props.createProfile(profileData, this.props.history);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


  render() {
      const {errors} =this.state;

    
    return (
      <div className="create-profile">
        <div className ="container">
     
        <h1>Edit Profile</h1> 
       
        <small> * = required fields
        </small>
        <form onSubmit={this.onSubmit}>

        <TextFieldGroup
                  placeholder="* Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                  info="Makes it easier to contact you!"
                />
    
        <input type = "submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"/>

        </form>
        </div> 
      </div>
    );
  }
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    
  };
  
  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  });

  export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
  );