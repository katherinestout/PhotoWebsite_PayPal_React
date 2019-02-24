import React, { Component } from 'react';
import Packagesjson from './Packagesjson.json';
import PackageCard from './PackageCard';
import Wrapper from './Wrapper';
import './css/packages.css';



class Packages extends Component {

  state = {
    Packagesjson,
    clicked: [],
    total: 0
  };

  handleClick = (price) => {
    let clicked = this.state.clicked;
   // clicked.push(price);
    clicked = price;
    console.log(clicked);
    

    let total = this.state.total;
    total = +price + +total;
    console.log(total);


   this.setState({
     clicked: clicked,
     total: total
    });

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
             <p> Total Amount = {this.state.total}</p>
    
        </Wrapper>
       
      

   
      </div>
      </div>
    )
  }
}
export default Packages;