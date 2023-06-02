import React from "react";

//components
import Product from "./product";

//css
import "../css/components/gallary-items.css";

const GallaryItems = (props) => {
  const { category, items } = props;
  const publicPath = process.env.PUBLIC_URL;

  return (
    <section className="gallary-items">
      {items.map((item) => {
        if (
          item.image &&
          (category === "All" ||
            category === "הכל" ||
            item.category === category)
        ) {
          return (
            <Product
              key={item.id}
              name={item.name}
              size={item.size}
              price={item.price}
              id={item.id}
              image={publicPath + item.image}
            />
          );
        }
      })}
    </section>
  );
};

export default GallaryItems;
