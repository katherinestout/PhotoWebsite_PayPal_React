import React, { Component } from 'react';

class Inquiries extends Component {
  constructor(){
    super();
    this.state ={
      name: 'Your Name',
      email: 'Email@email.com',
      message: 'Your Message'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.value);
  }


  render() {
    return (
      <div className="inquiries">
          <h1>Inquiries</h1>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" 
          onChange={this.handleChange}
          name="name" />
        </label>

        <label>
          Email:
          <input type="email"
          onChange={this.handleChange}
          name="email"/>
        </label>

        <label>
          Message:
          <textarea onChange={this.handleChange} 
          type="textarea"
          name="message"/>
        </label>




        <input 
        type="submit" 
        value="Submit" />
      </form>
        
      </div>
    )
  }
}

export default Inquiries;