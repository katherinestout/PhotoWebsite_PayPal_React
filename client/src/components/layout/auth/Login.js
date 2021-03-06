import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';
import './style/loginregister.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '', 
      password: '', 
      errors: {}
    };
//binding "this" to onchange and onsubmit
    this.onChange = this.onChange;
    this.onSubmit = this.onSubmit.bind(this);
  }

//componentDidMount is invoked immediately after you press submit
//pushes to dashboard page if authenticated

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

//componentWillRecieveProps is recieving new props, when they are passed into component
//update for the login component

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    //if authenticated push to dashboard, if not then errors

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  
render() {
    const { errors } = this.state;

  return (
    <div className="login">
      <div className="container">
   
              <h1 className="cap">Log In</h1>
              <p className="heading">
                Log In to your Account
              </p>
              <form onSubmit={this.onSubmit} className="loginform">
<TextFieldGroup
placeholder = "Email Address"
name="email"
type="email"
value={this.state.email}
onChange={this.onChange}
error={errors.email}
/>
<TextFieldGroup
placeholder = "Password"
name="password"
type="password"
value={this.state.password}
onChange={this.onChange}
error={errors.password}
/>
                <input type="submit" className="button" />
              </form>
         
        </div>
      </div>
    );
  }
}

//Add the login to proptypes

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);