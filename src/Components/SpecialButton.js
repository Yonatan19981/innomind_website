import React from "react";
import "../Styles/Button.css";

const SpecialButton = ({ children }) => {
  return (
    <div>
      <button className="Special-button">{children}</button>
    </div>
  );
};

export default SpecialButton;
