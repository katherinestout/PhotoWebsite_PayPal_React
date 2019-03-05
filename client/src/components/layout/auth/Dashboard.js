import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style/dashboard.css';
import {getCurrentProfile, deleteAccount} from '../../../actions/profileActions';



export class Dashboard extends Component {

  componentDidMount(){
    this.props.getCurrentProfile();
    //getcurrent profile is being called when we enter dashboard
  }
  onDeleteClick(e){
    this.props.deleteAccount();
  }

  render() {
    const {user} = this.props.auth;

    const{profile, loading} = this.props.profile;

    let dashBoardContent;

    if(profile === null || loading){
      dashBoardContent = <h4>Loading...</h4>;

    } else {
      if(Object.keys(profile).length > 0){
        dashBoardContent = (
          <div>
          <h1>Welcome, {user.name}!</h1>
          {profile.phone}
          <h2>I am so excited you are interested in my business.</h2>
          <p>Please schedule a day and time you are available.
          </p>
          <p>When your day and time has been confirmed, 
              you are required to make a $50 downpayment to ensure your
              day and time.
          </p>
          <p> <i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>

          <Link to ="/editprofile" className="btn btn-dark">Edit Profile</Link>
                      <br></br>

          <button onClick={this.onDeleteClick.bind(this)} 
                        className="btn btn-light">
                        Delete Account</button>
          </div>

        );
      } else {
        dashBoardContent = (
          <div>

            <p>Welcome! Please set up your profile.</p>
            <Link to ="/createprofile" className="btn btn-dark">
                Create a Profile!
                </Link>
          </div>
        );
      }
  
    }

   
    
    return (
      <div className="dashboard">
      {dashBoardContent}

      </div>
    )
  }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });
  
  export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);