import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="c-Footer">
      <h6 className="c-Footer__message">
        Weather App powered by{" "}
        <a
          className="link"
          rel="noopener noreferrer"
          href="https://openweathermap.org/"
          target="_blank"
        >
          OpenWeatherMap API
        </a>
      </h6>
      <h6 className="c-Footer__message">Created by Randy Aubichon</h6>
    </footer>
  );
};

export default Footer;
