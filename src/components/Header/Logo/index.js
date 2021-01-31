import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="c-Logo">
      <img
        className="c-Logo__image"
        src="weather-logo.png"
        alt="weather app"
      ></img>
    </div>
  );
};

export default Logo;
