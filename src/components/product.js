import React from "react";
//import { Link } from "react-router-dom";

//css
import "../css/components/product.css";

const Product = (props) => {
  const { image, name, id } = props;

  /*<Link key={id} to={`/product/${id}`}>*/

  return (
    <div key={id} className="product">
      <img src={image} alt="painting" />
      <h2>{name}</h2>
      {/*
        <div className="details">
          <p>{size}</p>
          <p>{price}</p>
        </div>*/}
    </div>
  );
};

export default Product;
