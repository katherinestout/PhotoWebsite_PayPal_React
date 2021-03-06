import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import {getProfiles} from '../../../actions/profileActions';
import './profiles.css';

class Profiles extends Component {
    componentDidMount() {
        this.props.getProfiles();
    }
  render() {

    const {profiles, loading} = this.props.profile;
    
    let profileItems;

    if(profiles === null || loading) {
        profileItems = <h4>Loading...</h4>;
    } else {
        //mapping through profiles
        if (profiles.length > 0) {
            profileItems = profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ));

        } else {
            profileItems = <h4>No Profiles Found </h4>;
        }
    }
    return (
      <div className="profiles">
      <div className = "container">
        
          <div>
          <h1><b>All of your contacts:</b> </h1>
          {profileItems}

          </div>
      </div>
      </div>
    );
  }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfiles})(Profiles);
