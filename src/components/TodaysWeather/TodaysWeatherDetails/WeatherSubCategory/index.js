import React from "react";
import "./WeatherSubCategory.css";

const WeatherDetails = (props) => {
  return (
    <div className="c-WeatherDetails">
      <span className="c-WeatherDetails__label">{props.label}</span>
      <span className="c-WeatherDetails__value">{props.value}</span>
      <div className="c-WeatherDetails__units">
        {props.vector ? (
          <>
            <span className="vector">{props.vector}</span>
            <span className="metric">{props.units}</span>
          </>
        ) : (
          <span className="metric">{props.units}</span>
        )}
      </div>
    </div>
  );
};

export default WeatherDetails;
