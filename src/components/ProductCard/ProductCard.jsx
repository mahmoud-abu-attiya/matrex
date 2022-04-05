import React from 'react'
import "./ProductCard.scss"
// import prod from "../../images/for-men/prod1.png"

const ProductCard = (props) => {
  return (
    <div className="n-card">
      <div className="imgBox">
        <img
          src={props.img}
          alt="mouse corsair"
          className="prodduct"
        />
      </div>
      <div className="contentBox">
        <h3>Mouse Corsair M65</h3>
        <h2 className="price">
          61.<small>98</small> $
        </h2>
        <button href="#" className="buy">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard