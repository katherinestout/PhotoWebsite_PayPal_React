import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './layoutstyles/inquiries.css';

class Inquiries extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.value);
  }

  async handleSubmit(event){
    event.preventDefault();

    const {name, email, message} = this.state;

    

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    }).then( this.props.history.push("/thankyouemail"));
      console.log(form);
  }




  render() {
    return (

      <div className="inquiries">
          <h1><b>Inquiries</b></h1>
          <p>Have an idea or question?</p>
          <p> Fill out the form below to 
            get in contact with me!
          </p>

          <form onSubmit={this.handleSubmit} className="inquiryform">
        <label className="label">
          Name:
          <input type="text" 
          onChange={this.handleChange}
          name="name"
          placeholder="First and Last" />
        </label>
        <br></br>
        <label className="label">
          Email:
          <input type="email"
          onChange={this.handleChange}
          name="email"
          placeholder="email@email.com"/>
        </label>
      <br></br>
        <label className="label">
          Message:
          <textarea onChange={this.handleChange} 
          type="textarea"
          name="message"
          placeholder="your message here"/>
        </label>
      <br></br>
 
        <input
        className="button" 
        type="submit" 
        value="Submit" 
        />
   
      </form>
        
      </div>
    )
  }
}

export default withRouter(Inquiries);