import React from 'react';
import teamData from '../data/Ourteam';
import "./Card.css";
 
const Card = () => {
  return (
    <div className="product-container">  
    {
      teamData.map((item) => (
        <div key={item.id} className='product-card'>
          <img src={item.image} alt="image" />
          <p>{item.name}</p>
          <p>{item.designation}</p>
        </div>
      ))
    }
  </div>
);
  
}

export default Card
