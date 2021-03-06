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

    const adminA = 'admin';
    let adminB = `${this.props.auth.user.name}`;
    console.log(adminB);

    let dashBoardContent;

    if(profile === null || loading){
      dashBoardContent = <h4>Loading...</h4>;

     } else {
        if(adminA === adminB){
          dashBoardContent = (
            <div>
<div> <h2><b>Welcome Admin!</b></h2></div>
<br></br>
<p>You can either see photoshoot requests, or see all contacts.</p>
<br></br>

  <Link className="button req" to="/feed"
              style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <b> Requests</b>
          </Link>

  <Link className="button contacts" to="/profiles"
              style={{ textDecoration: 'none', color: 'whitesmoke', margin: '1%'}}>
          <b> Contacts</b>
          </Link>
</div>
          );
        
      


    } else {
      if(Object.keys(profile).length > 0){
        dashBoardContent = (
          <div>
          <h1>Welcome, {user.name} !</h1>
     
          <h2>I am so excited you are interested in my business.</h2>
          <p>Please schedule a day and time you are available!
          </p>
          <p>I will get back to you shortly.</p>
       
          <p> <i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>
            
          <div className="card">

          <Link to ={`/profile/${profile.email}`}  className="btn edit button"
          style={{ textDecoration: 'none', color: 'black'}}>Profile</Link>
        
                      <br></br>

          <button onClick={this.onDeleteClick.bind(this)} 
                        className="btn delete button"
                        style={{ textDecoration: 'none', color: 'black'}}>
                        Delete Account</button>
                        </div>
          </div>

        );


      }
      
 else {
        dashBoardContent = (
          <div>
                 <h1>Welcome, {user.name}!</h1>
         
          <h2>I am so excited you are interested in my business.</h2>
          <p>Please schedule a day and time you are available.
          </p>
       
          <p> <i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>
          <div className='card'>

            <p> Please set up your Contact Information.</p>

            <Link to ="/createprofile" className="btn create button"
             style={{ textDecoration: 'none', color: 'black'}}>
                Create Profile
                </Link>
                </div>
          </div>
        );
      }
  
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