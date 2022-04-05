import React from "react";
import prod from "../../images/for-men/prod4.png"
import "../ProductShow.scss"
import ProductCard from "../ProductCard/ProductCard";

let myFunc = (name)=>{
  console.log(name)
} 
export {myFunc}

const ForMen = () => {
  return (
    <div className="container formen">
      <h2>For Women</h2>
      <div className="card-container">
      {Array(6)
        .fill(" ")
        .map((card) => {
          return (
            // 
            <ProductCard img={prod}/>
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
