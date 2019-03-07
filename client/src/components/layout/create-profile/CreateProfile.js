import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../../components/common/TextFieldGroup';
import { createProfile} from '../../../actions/profileActions';
import './create.css';


class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
  
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors,
                         });


    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      phone: this.state.phone,
      email: this.state.email
     
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
       
           
              <h1>Contact Info</h1>
      
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

        <TextFieldGroup
                  placeholder="* Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
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
  errors: PropTypes.object.isRequired,

  
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
  
});
export default connect(mapStateToProps, { createProfile})((CreateProfile)
);