import React, { useEffect } from "react";
import ImageGallary from "react-image-gallery";

import "../css/pages/articles-page.css";

const ArticlesPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { contentText, contentMedia, dir } = props;
  const publicPath = process.env.PUBLIC_URL;

  const hashivenu = contentMedia.hashivenu.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const moznaiim = contentMedia.moznaiim.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const titles = contentMedia.titles.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });

  const candles = contentMedia.candles.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });

  const ladder = contentMedia.ladder.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });

  const seaOpen = contentMedia.seaOpen.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const shofar = contentMedia.shofar.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const skyFountain = contentMedia.skyFountain.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const diffarentLife = contentMedia.diffarentLife.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const seven = contentMedia.seven.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });
  const jewish = contentMedia.jewish.map((image) => {
    return { original: publicPath + image, thumbnail: publicPath + image };
  });

  return (
    <section className={`artiacles-page ${dir === "ltr" ? "ltr" : "rtl"}`}>
      <section className="banner">
        <img
          className="banner-image"
          src={contentMedia.banner}
          alt="some of the art"
        />
        <h1>{contentText.title}</h1>
      </section>
      <section className="slider-section">
        <div className="sliders">
          <div className="slider">
            <ImageGallary
              items={hashivenu}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={moznaiim}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={titles}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>
        </div>

        <div className="sliders">
          <div className="slider">
            <ImageGallary
              items={candles}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={ladder}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={seaOpen}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>
        </div>

        <div className="sliders">
          <div className="slider">
            <ImageGallary
              items={shofar}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={skyFountain}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={diffarentLife}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>
        </div>

        <div className="sliders">
          <div className="slider">
            <ImageGallary
              items={seven}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>

          <div className="slider">
            <ImageGallary
              items={jewish}
              isRTL={dir === "rtl"}
              showPlayButton={false}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ArticlesPage;
