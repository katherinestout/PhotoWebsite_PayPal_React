import React from 'react';
import './css/style.css';

const PackageCard = props => (
 
      <div>
      <div>
    
      <img alt="true" src = {props.image}/>
      </div>

      <p><b> {props.title} - ${props.price}</b></p>
      <p> {props.des} </p>

      </div>
    )

export default PackageCard;