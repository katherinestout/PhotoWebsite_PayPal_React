import axios from 'axios';
import {GET_ACCOUNT, 
    ACCOUNT_LOADING, 
    CLEAR_CURRENT_ACCOUNT, 
    GET_ERRORS,
    SET_CURRENT_USER,
    GET_ACCOUNTS
    } from './types';

// Get current account
export const getCurrentAccount = () => dispatch => {
    dispatch(setAccountLoading());
    axios
      .get('/api/account')
      .then(res =>
        dispatch({
          type: GET_ACCOUNT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ACCOUNT,
          payload: {}
        })
      );
  };


// Create Account
export const createAccount = (accountData, history) => dispatch => {
    axios
      .post('/api/account', accountData)
      .then(res => history.push('/dashboard'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


// Delete account & account
export const deleteAccount = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      axios
        .delete('/api/account')
        .then(res =>
          dispatch({
            type: SET_CURRENT_USER,
            payload: ''
          })
        )
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        );
    }
  };


// Get all accounts
export const getAccounts = () => dispatch => {
  dispatch(setAccountLoading());
    axios
      .get('/api/account/all')
      .then(res =>
        dispatch({
          type: GET_ACCOUNTS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ACCOUNTS,
          payload: null
        })
      );
  };




//Account Loading
export const setAccountLoading = () => {
    return {
        type: ACCOUNT_LOADING
    };
};


//clear account
export const clearCurrentAccount = () => {
    return {
        type: CLEAR_CURRENT_ACCOUNT
    };
};