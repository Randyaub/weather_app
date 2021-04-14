import React from "react";
import "./ForcastImage.css";

const ForcastImage = ({ url }) => {
  return <img className="c-ForcastImage" src={url} alt="weather" />;
};

export default ForcastImage;
