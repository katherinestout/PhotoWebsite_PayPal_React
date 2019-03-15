import React, { Component } from 'react';
import './thankyou.css';

class ThankYouEmail extends Component {
  render() {
    return (
      <div className="thankyouemail">
        <h1>Thank You!</h1>
        <p>Thank you for submitting your photoshoot request.</p> 
        <p>I am so excited to begin this creative proccess with you.</p>
        <p> When confirmed, I will send an email with all the details.  </p>
        <p>There will also be a green check next to your request on your profile.</p>
       
        <p><i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>
      </div>
    )
  }
}

export default ThankYouEmail;