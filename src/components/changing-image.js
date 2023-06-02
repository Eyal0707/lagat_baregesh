import React, { useEffect, useState } from "react";

import "../css/components/changing-image.css";

function ChangingImage(props) {
  const { images } = props;
  const PublicPath = process.env.PUBLIC_URL;

  const length = images.length;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="changing-image">
      <img src={PublicPath + images[current]} alt="Some of the artist's work" />
    </div>
  );
}

export default ChangingImage;
