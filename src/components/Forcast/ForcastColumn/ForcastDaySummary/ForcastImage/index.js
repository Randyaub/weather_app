import React from "react";
import "./ForcastImage.css";

const ForcastImage = (props) => {
  return <img className="c-ForcastImage" src={props.url} alt="weather" />;
};

export default ForcastImage;
