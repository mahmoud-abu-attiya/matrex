import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductShow.scss"
import prod from "../../images/for-men/prod1.png"
import { myFunc } from "../ForWomen/ForWomen";


const ForMen = () => {
  myFunc(
    'ahmed'
  )
  return (
    <div className="container formen">
      <h2>For Men</h2>
      <div className="card-container">
      {Array(6)
        .fill(" ")
        .map((card, index) => {
          return (
            // 
            <ProductCard key={index} img={prod}/>
          )
        })}
      </div>
      <a href="/" className="view-more">
        view more
      </a>
    </div>
  );
};

export default ForMen;
