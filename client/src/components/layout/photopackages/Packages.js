import React, { Component } from 'react';
import Packagesjson from './Packagesjson.json';
import PackageCard from './PackageCard';
import Wrapper from './Wrapper';
import './css/packages.css';



class Packages extends Component {

  state = {
    Packagesjson,
   
  };

 

  render() {
    return (
      <div>
     
      <div className="wrapping">
      <h1><b>Photo Packages</b></h1>
        <Wrapper>
        {this.state.Packagesjson.map(Packagesjson => (
          <PackageCard
          title = {Packagesjson.title}
          id key = {Packagesjson.id}
          price = {Packagesjson.price}
        
          image = {Packagesjson.image}
          des = {Packagesjson.des}
          
          />
          
        ))}
            
    
        </Wrapper>
       
      

   
      </div>
      </div>
    )
  }
}
export default Packages;