import React from "react";
import "./WeatherDetails.css";

const Temperature = (props) => {
  return (
    <>
      <div className="c-Temperature">
        <div className="c-Temperature__temp">
          <span className="wd-temperature">{props.temperature}</span>
          <div>
            <div className="wd-unit-wrap">
              <span className="wd-temp-unit">°C</span>
            </div>
            <p className="wd-feels-like">
              <span className="label">FEELS LIKE</span>
              <span className="value">{props.feels_like}</span>
            </p>
          </div>
        </div>
        <div className="l-Temperature__image">
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="weather"
            className="c-Temperature__image"
          />
        </div>
      </div>
      <div>{props.weather}</div>
    </>
  );
};

export default Temperature;
