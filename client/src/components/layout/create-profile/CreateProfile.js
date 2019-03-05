import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../../components/common/TextFieldGroup';
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
//import InputGroup from '../common/InputGroup';
import { createProfile } from '../../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

      phone: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      phone: this.state.phone,
     
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors} = this.state;

      
    return (
      <div className="create-profile">
        <div className="container">
       
           
              <h1>Create Your Profile</h1>
              <p>
               Please enter your phone number
              </p>
              <small>* = required fields</small>
              <form onSubmit={this.onSubmit}>

                <TextFieldGroup
                  placeholder="* Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                  info="Makes it easier to contact you!"
                />
             
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
   
       
        </div>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(mapStateToProps, { createProfile })((CreateProfile)
);