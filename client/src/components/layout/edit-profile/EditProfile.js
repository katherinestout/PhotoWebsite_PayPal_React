import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
import { createProfile, getCurrentProfile } from '../../../actions/profileActions';
import './edit.css'


export class EditProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
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
           email: profile.email
        });
        
        }
    }

    onSubmit(e){
        e.preventDefault();

      const profileData = {

        phone: this.state.phone,
        email: this.state.email
       

      };

      this.props.createProfile(profileData, this.props.history);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


  render() {
      const {errors} =this.state;

    
    return (
      <div className="edit-profile">
        <div className ="container">
     
        <h1>Edit Profile</h1> 
       
        <small> * = required fields
        </small>
        <form onSubmit={this.onSubmit} className="editprofileform">

        <TextFieldGroup
                  placeholder="* Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                  info="Makes it easier to contact you!"
                />


        <TextFieldGroup
                  placeholder="* Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
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