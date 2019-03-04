import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
//import InputGroup from './../common/InputGroup';
import { createAccount} from '../../actions/accountActions';

class CreateAccount extends Component {
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

    const accountData = {
     phone: this.state.phone
    };

    this.props.createAccount(accountData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

  

    return (
      <div className="create-account">
        <div className="container">
         
              <h1>Create Your Account</h1>
              <p>
                Let's get some information 
              </p>
              <small>* = required fields</small>
              <form onSubmit={this.onSubmit}>

                <TextFieldGroup
                  placeholder="* Phone Number"
                  name="handle"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                  info="Please enter your phone number"
                />
             
           
                <input
                  type="submit"
                  value="Submit"
                  className="btn"
                />
              </form>
            </div>
          </div>
     
    );
  }
}
CreateAccount.propTypes = {
  account: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  account: state.account,
  errors: state.errors
});
export default connect(mapStateToProps, { createAccount })(
(CreateAccount)
);