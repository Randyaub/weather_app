import React from "react";
import "./Temperature.css";

const Temperature = ({ temperature, feels_like, icon, weather }) => {
  return (
    <>
      <div className="c-Temperature">
        <div className="l-Temperature__temp">
          <span className="c-Temperature__temp">{temperature}</span>
          <div className="c-Temperature__details">
            <div className="l-Temperature__unit">
              <span className="c-Temperature__unit">°C</span>
            </div>
            <p className="c-Temperature__feels">
              <span className="label">FEELS LIKE</span>
              <span className="value">{feels_like}</span>
            </p>
          </div>
        </div>
        <div className="l-Temperature__image">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather"
            className="c-Temperature__image"
          />
        </div>
      </div>
      <div>{weather}</div>
    </>
  );
};

export default Temperature;
