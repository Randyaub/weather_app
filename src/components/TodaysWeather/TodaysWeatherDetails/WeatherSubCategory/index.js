import React from "react";
import "./WeatherSubCategory.css";

const WeatherDetails = ({ label, value, vector, units }) => {
  return (
    <div className="c-WeatherDetails">
      <span className="c-WeatherDetails__label">{label}</span>
      <span className="c-WeatherDetails__value">{value}</span>
      <div className="c-WeatherDetails__units">
        {vector ? (
          <>
            <span className="vector">{vector}</span>
            <span className="metric">{units}</span>
          </>
        ) : (
          <span className="metric">{units}</span>
        )}
      </div>
    </div>
  );
};

export default WeatherDetails;
