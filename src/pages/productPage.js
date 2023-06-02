import React from "react";
import { useParams } from "react-router-dom";

//components

//css
import "../css/pages/productPage.css";

const ProductPage = (props) => {
  const { dir, items } = props;

  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));
  return (
    <section className="product-page">
      <div className="banner"></div>
      <section className="product-section">
        <div className={`product-details ${dir === "ltr" ? "ltr" : "rtl"}`}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-details-extra">
            <h2>{product.price}</h2>
            <h2>{product.size}</h2>
          </div>
        </div>
        <div className="image-room">
          <img
            className="product-image"
            src={product.image}
            alt="the product"
          />
        </div>
      </section>
    </section>
  );
};

export default ProductPage;
