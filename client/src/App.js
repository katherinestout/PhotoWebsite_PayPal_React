import React, { Component } from 'react';
import PayPalButton from './PayPalButton';
import './App.css';

//require('dotenv').configure();

/*
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'ARTyH8uojFhbF0OMuhYnsGtjwr6YOBuVyR1aShZmdv3zWRWIpO3UZMi6UcYvId-jFSFcXNB_Dipqg9Ba',
  'client_secret': 'EDvuzF7pbswLpmhGs2W6MtZrBNm5AOmwJT34fkByoeeUkNYkqcHpyay6TW7AFWSCSV-xEUymTI2A9OYW'
});
*/

require('dotenv').config(); 

const CLIENT = {
  sandbox: process.env.REACT_APP_client_id,
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';


class App extends Component {
  render() {

   

  const onSuccess = (payment) =>
  console.log('Successful payment!', payment);

  const onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);

  const onCancel = (data) =>
    console.log('Cancelled payment!', data);

    return (
      <div className="App">
         <PayPalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default App;
