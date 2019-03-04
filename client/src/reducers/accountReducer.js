import {GET_ACCOUNT, 
    GET_ACCOUNTS,
    ACCOUNT_LOADING, 
    CLEAR_CURRENT_ACCOUNT} 
    from '../actions/types';



//fetching accounts
const initialState = {
    account: null,
    accounts: null,
    loading: false
};

export default function( state = initialState, action){
    //switch statement based on type
switch(action.type) {
    //account_loading, setstate
    case ACCOUNT_LOADING:
    return{
        ...state,
        loading: true
    };
    //Get_account
    //payload will be empty and get set to that user
    //if there is no account yet, will be able to create a account
    case GET_ACCOUNT:
    return {
        ...state,
        account: action.payload,
        loading: false
    };
    case GET_ACCOUNTS:
    return{
        ...state,
        accounts: action.payload,
        loading: false
    };
    case CLEAR_CURRENT_ACCOUNT:
    return{
        ...state,
        account: null
    };
    default:
    return state;
}
}