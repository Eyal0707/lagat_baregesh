import React from "react";

//components
import Navbar from "./navbar";

//css
import "../css/components/footer.css";

const Footer = (props) => {
  const { dir, contentText } = props;
  return (
    <footer className={`home-page ${dir === "ltr" ? "ltr" : "rtl"}`}>
      <Navbar content={props.content} />
      <div className="contacts">
        <div>
          <p>{contentText.phoneTitle}</p>
          <p>{contentText.phone1}</p>
          <p>{contentText.phone2}</p>
        </div>
        <p>{contentText.email}</p>
      </div>
    </footer>
  );
};

export default Footer;
