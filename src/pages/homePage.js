import React, { useEffect } from "react";

//components
import ChangingImage from "../components/changing-image.js";

//css
import "../css/pages/homePage.css";

function HomePage(props) {
  const { contentText, contentMedia, dir } = props;
  const PublicPath = process.env.PUBLIC_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`home-page ${dir === "ltr" ? "ltr" : "rtl"}`}>
      <section className="banner">
        {/*<video autoPlay muted loop id="video">
          <source src={PublicPath + contentMedia.banner} type="video/mp4" />
  </video>*/}
        <img
          src={PublicPath + contentMedia.banner}
          alt="some of the artists art"
        />
        <h1 className="wavy">
          {Array.prototype.map.call(contentText.title, (char, index) => {
            return (
              <span key={index} className={`title-char${index}`}>
                {char}
              </span>
            );
          })}
        </h1>
        <h3>
          <span className="red">{` ${contentText.subTitleI}`}</span>
          <span className="yellow">{` ${contentText.subTitleII}`}</span>
          <span className="blue">{` ${contentText.subTitleIII}`}</span>
        </h3>
      </section>

      <section className="details">
        <div className="details-image">
          <img
            src={PublicPath + contentMedia.detailsImage}
            alt="featured art"
          />
        </div>

        <article className="details-text">
          <h2>{contentText.detailsIntroTitle}</h2>
          <p>{contentText.detailsIntroText}</p>
          <ul>
            <li>{contentText.detailsIntroListI}</li>
            <li>{contentText.detailsIntroListII}</li>
            <li>{contentText.detailsIntroListIII}</li>
          </ul>

          <div className="details-articals">
            <article className="openings">
              <h2>{contentText.detailsTitleI}</h2>
              <h3>{contentText.detailsSubTitleI}</h3>
              <ul>
                <li>{contentText.openingHoursI}</li>
                <li>{contentText.openingHoursII}</li>
                <li>{contentText.openingHoursIII}</li>
              </ul>
            </article>
            <article className="address">
              <h2>{contentText.detailsTitleII}</h2>
              <p>{contentText.address}</p>
            </article>
          </div>
        </article>
      </section>

      <section className="about">
        <article className="about-text">
          <h2>{contentText.aboutTitle}</h2>
          <p>{contentText.aboutText}</p>
        </article>

        <div className="about-image">
          <ChangingImage images={contentMedia.aboutImage} />
        </div>
      </section>
    </section>
  );
}

export default HomePage;
