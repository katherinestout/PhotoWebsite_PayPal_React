import React, { Component } from 'react';
import Packagesjson from './Packagesjson.json';
import PackageCard from './PackageCard';
import Wrapper from './Wrapper';
import './css/packages.css';

import PaymentPage from './../../paypal/PaymentPage';

class Packages extends Component {

  state = {
    Packagesjson,
    clickedArray: []
  }

  handleClick = (price) => {
    let clickedArray = this.state.clickedArray;
    clickedArray.push(price);
    console.log(clickedArray);
  }

  render() {
    return (
      <div>
      <div className="wrapping">
        <Wrapper>
        {this.state.Packagesjson.map(Packagesjson => (
          <PackageCard
          title = {Packagesjson.title}
          id key = {Packagesjson.id}
          price = {Packagesjson.price}
          handleClick = {this.handleClick} 
          image = {Packagesjson.image}
          des = {Packagesjson.des}
          />
        ))}
        
        </Wrapper>

        <PaymentPage/>
      </div>
      </div>
    )
  }
}
export default Packages;