import React from "react";

//components
import Contact from "./contact.js";
import ChangingImage from "./changing-image.js";

//css
import "../css/components/contact-section.css";

const ContactSection = (props) => {
  const { contentText, contentMedia, dir } = props;
  return (
    <section className={`contact ${dir === "ltr" ? "ltr" : "rtl"}`}>
      <div className="images">
        <ChangingImage images={contentMedia.display1} />
      </div>
      <Contact content={contentText} />
      <div className="images">
        <ChangingImage images={contentMedia.display2} />
      </div>
    </section>
  );
};

export default ContactSection;
