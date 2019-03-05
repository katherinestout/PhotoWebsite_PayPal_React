import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { createAccount, getCurrentAccount } from '../../actions/accountActions';
//import isEmpty from '../../validation/is-empty';


export class EditAccount extends Component {

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getCurrentAccount();
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        if(nextProps.account){

            const account = nextProps.account;
           
           // account.phone = !isEmpty(account.phone) ? account.phone : '';
        
        //set component fields state
        this.setState({
            phone: account.phone
        });
        }
    }

    onSubmit(e){
        e.preventDefault();
      const accountData = {

        phone: this.state.phone

      };

      this.props.createAccount(accountData, this.props.history);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


  render() {
      const {errors} =this.state;

    return (
      <div className="create-account">
        <div className ="container">
    
        <h1>Edit Account</h1> 
       
        <small> * = required fields
        </small>
        <form onSubmit={this.onSubmit}>

        <TextFieldGroup
        placeholder="* Phone"
        name="phone"
        value={this.state.phone}
        onChange={this.onChange}
        error={errors.phone}
        info="Please enter your phone number"
        />
          
        <input type = "submit"
            value="Submit"
            className="btn"/>

        </form>
        </div> 
      
      </div>
    );
  }
}

EditAccount.propTypes = {
    createAccount: PropTypes.func.isRequired,
    getCurrentAccount: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired,
    
  };
  
  const mapStateToProps = state => ({
    account: state.account,
    errors: state.errors
  });

  export default connect(mapStateToProps, { createAccount, getCurrentAccount })(
    withRouter(EditAccount)
  );