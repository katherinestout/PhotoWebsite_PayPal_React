import React, { Component } from 'react';
import Packagesjson from './Packagesjson.json';
import PackageCard from './PackageCard';
import Wrapper from './Wrapper';
import './css/packages.css';

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
          title key = {Packagesjson.title}
          id  = {Packagesjson.id}
          price = {Packagesjson.price}
          handleClick = {this.handleClick} 
          image = {Packagesjson.image}
          />
        ))}
        </Wrapper>
      </div>
      </div>
    )
  }
}
export default Packages;