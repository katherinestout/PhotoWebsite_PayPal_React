import React, { Component } from 'react';
import PayPal from '../../paypal/PayPal';
//import './style/downpayment.css';

class Downpayment extends Component {
  render() {
    return (

      <div className='downpaymentbody'>
      <img src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2658&q=80"
      alt="downapayment"
      className="downpaymentpic">
      </img>

      <div className="centered">
      <h2>
      <b>Click here to pay the $50 Downpayment
      </b>
      </h2>

      <PayPal/>
      </div>
      
      </div>


    )
  }
}
export default Downpayment;