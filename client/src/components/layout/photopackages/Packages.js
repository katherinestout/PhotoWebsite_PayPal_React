import React, { Component } from 'react';
import Packagesjson from './Packagesjson.json';
import PackageCard from './PackageCard';
import Wrapper from './Wrapper';
import './css/packages.css';



class Packages extends Component {

  state = {
    Packagesjson,
    clicked: []

  
  };

  handleClick = (price) => {
    let clicked = this.state.clicked;
   // clicked.push(price);
    clicked = price;
    console.log(clicked);

    this.setState({
      clicked: clicked
    })

  };

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
             <p> ClickedArray = {this.state.clicked}</p>
    
        </Wrapper>
       
      

   
      </div>
      </div>
    )
  }
}
export default Packages;