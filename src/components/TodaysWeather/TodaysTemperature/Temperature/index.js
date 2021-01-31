import React from "react";
import "./Temperature.css";

const Temperature = (props) => {
  return (
    <>
      <div className="c-Temperature">
        <div className="l-Temperature__temp">
          <span className="c-Temperature__temp">{props.temperature}</span>
          <div className="c-Temperature__details">
            <div className="l-Temperature__unit">
              <span className="c-Temperature__unit">°C</span>
            </div>
            <p className="c-Temperature__feels">
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
