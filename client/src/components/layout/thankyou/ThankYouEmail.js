import React, { Component } from 'react';
import './thankyou.css';

class ThankYouEmail extends Component {
  render() {
    return (
      <div className="thankyouemail">
        <h1>Thank You!</h1>
        <p>Thank you for your email.</p> 
        <p> Expect a response shortly! </p>
        <p><i>Jane Newport</i></p>
      </div>
    )
  }
}

export default ThankYouEmail;