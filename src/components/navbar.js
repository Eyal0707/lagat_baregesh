import React, { useState } from "react";
import { Link } from "react-router-dom";

//css
import "../css/components/navbar.css";

function Navbar(props) {
  const { dir } = props;
  const [showen, setShowen] = useState(false);
  const PublicPath = process.env.PUBLIC_URL;
  const toggleNav = () => {
    setShowen(!showen);
  };
  return (
    <nav
      onClick={toggleNav}
      className={`${showen ? "show" : "hide"} ${dir === "ltr" ? "ltr" : "rtl"}`}
    >
      {props.content.items.map((item, index) => {
        if (index === 0)
          return (
            <Link className="home-link" key={item.name} to={item.path}>
              <img
                className="logo"
                src={PublicPath + props.content.logo}
                alt="logo"
              />
              <h2>{item.name}</h2>
            </Link>
          );
        if (index === props.content.items.length - 1)
          return (
            <a key={index} href={item.path} target="_blank">
              <h2>{item.name}</h2>
            </a>
          );
        return (
          <Link key={item.name} to={item.path}>
            <h2>{item.name}</h2>
          </Link>
        );
      })}
      <div className="pull"></div>
    </nav>
  );
}

export default Navbar;
