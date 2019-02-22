import React from 'react';
import './css/style.css';

const PackageCard = props => (
 
      <div className = "card">

      <div className="img-container">
    
      <img alt="true" src = {props.image}
    
      onClick={() => props.handleClick(props.price)}
      />
      </div>

      <p> {props.title}</p>
      <p> {props.des} </p>
      <p> ${props.price}</p>
      </div>
    )

export default PackageCard;