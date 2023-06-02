import React, { useState, useEffect } from "react";

//components
import GallaryItems from "../components/gallary-items";

//css
import "../css/pages/gallary.css";

const GallaryPage = (props) => {
  const { contentText, contentMedia, items, dir } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [category, SetCategory] = useState("All");
  return (
    <section className={`gallary-page ${dir === "ltr" ? "ltr" : "rtl"}`}>
      <section className="banner">
        <img
          className="banner-image"
          src={contentMedia.banner}
          alt="some of the art"
        />
        <h1>{contentText.title}</h1>
      </section>
      <div className="category-selector">
        {contentText.catagories.map((cat) => {
          return (
            <h3
              key={cat}
              className={category === cat ? "selected" : ""}
              onClick={() => SetCategory(cat)}
            >
              {cat}
            </h3>
          );
        })}
      </div>
      <GallaryItems category={category} items={items} />
    </section>
  );
};

export default GallaryPage;
