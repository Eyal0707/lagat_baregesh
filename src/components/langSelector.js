import React, { useState } from "react";

import "../css/components/lang-selector.css";

const LangSelector = (props) => {
  const { func } = props;
  /*return (
    <div className="lang-selector">
      <button onClick={() => func("hebrew")}>hebrew</button>
      <button onClick={() => func("English")}>English</button>
    </div>
  );*/

  const handleChange = (e) => {
    func(e.target.value);
  };
  return (
    <select className="lang-selector" onChange={handleChange}>
      <option value="hebrew">Hebrew</option>
      <option value="English">English</option>
    </select>
  );
};

export default LangSelector;
