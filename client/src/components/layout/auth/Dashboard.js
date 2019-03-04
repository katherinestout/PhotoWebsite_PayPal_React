import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style/dashboard.css';



export class Dashboard extends Component {
  render() {
    const {user} = this.props.auth;
    return (
      <div className="dashboard">
        <h1>Welcome, {user.name}!</h1>
        <h2>I am so excited you are interested in my business.</h2>
        <p>Please schedule a day and time you are available.
        </p>
        <p>When your day and time has been confirmed, 
            you are required to make a $50 downpayment to ensure your
            day and time.
        </p>
        <p> <i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>

      </div>
    )
  }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
export default connect(mapStateToProps)(Dashboard);

