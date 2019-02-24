import React from 'react';
import './css/style.css';

const PackageCard = props => (
 
      <div>
      <div>
    
      <img alt="true" src = {props.image}
      />
      </div>

      <p> {props.title}</p>
      <p> {props.des} </p>
      <p> ${props.price}</p>
      </div>
    )

export default PackageCard;