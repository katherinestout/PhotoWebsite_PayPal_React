import React, { Component } from 'react';
import PayPalButton from './PayPalButton';
import {withRouter} from 'react-router-dom';



require('dotenv').config(); 

const CLIENT = {
  sandbox: process.env.REACT_APP_client_id
};

const ENV = process.env.NODE_ENV = 'sandbox';


class PayPal extends Component {
  render() {


  const onSuccess = () =>
  this.props.history.push("/thankyoupayment");
  //console.log('Successful payment!', payment);
 

    

  const onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);

  const onCancel = (data) =>
    console.log('Cancelled payment!', data);

    return (
      <div className="PayPal">
         <PayPalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={50}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />

  
      </div>
    );
  }
}

export default withRouter(PayPal);
