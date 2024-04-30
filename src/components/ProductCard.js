import React from "react";
import '../pages/Products.css'

function ProductCard({productImage, productTitle, productDescription, productBrochure, download}) {
    return (
      <div className="product-card">
        <img className="images" src={productImage} alt={productTitle} />
        <h3 className="images_title">{productTitle}</h3>
        <p className="images_description">{productDescription}</p>
        <a href={productBrochure} target="_blank"><button className="download">Download Brochure</button></a>
      </div>
    );
  }
  
export default ProductCard;

