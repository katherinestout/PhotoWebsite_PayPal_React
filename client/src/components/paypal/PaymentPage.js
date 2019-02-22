import React, { Component } from 'react';
import PayPal from './PayPal';
import Summary from './Summary';

class PaymentPage extends Component {
  render() {
    return (
      <div>

          <PayPal/>
          <Summary/>
        
      </div>
    )
  }
}
export default PaymentPage;