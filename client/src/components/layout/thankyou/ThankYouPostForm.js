import React, { Component } from 'react';
import './thankyou.css';

class ThankYouEmail extends Component {
  render() {
    return (
      <div className="thankyouemail">
        <h1>Thank You!</h1>
        <p>Thank you for submitting your photoshoot request.</p> 
        <p>I am so excited to begin this creative proccess with you!</p>
        <p> When confirmed, I will send an email with all the details.  </p>
        <p>The confirmation will be green on your profile, when all details are confirmed.</p>
       
        <p><i className="fas fa-camera-retro"></i><i>Jane Newport</i></p>
      </div>
    )
  }
}

export default ThankYouEmail;