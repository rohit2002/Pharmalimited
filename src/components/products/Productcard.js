import React from 'react';
import products from '../data/data';
import "./Productcard.css";

const Productcard = () => {
  return (
    <div className="product-container">  
      {
        products.map((item) => (
          <div key={item.id} className='product-card'>
            <img src={item.image} alt="image" />
            <p>{item.name}</p>
            <p>{item.category}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Productcard;
