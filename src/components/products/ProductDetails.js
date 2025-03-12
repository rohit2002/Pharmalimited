import React from "react";
import "./ProductDetails.css";  
import products from "../data/data";

const ProductDetails = () => {
  return (
    <div className="product-container">
      

      {
        products.map((items)=>{
          return (
            <>
             <div className="product-image">
        <img
          src={items.image} 
          alt="capsule image"
        />
      </div>

      {/* Text Section */}
      <div className="product-info">
        <h1 className="product-title">
          {items.name}
        </h1>

        {/* Composition */}
        <h2 className="section-title">Composition</h2>
        <p className="product-text">

        
          {products.ingredients.map((ingredient, index) => (
          
             <p> {ingredient.name}</p> 
             
              <p>{ingredient.amount}</p>
          
          ))}
        

        </p>

        {/* Description */}
        <h2 className="section-title">Description</h2>
        <p className="product-text">
          For the well-being of women with nutritional deficiencies associated
          with stress & fatigue, menstrual symptoms & discomfort, recurrent
          infections, bone health, menopausal symptoms, cardiovascular health,
          and metabolic diseases.
        </p>
      </div>
            
            </>
          )
        })
      }
     
    </div>
  );
};

export default ProductDetails;
