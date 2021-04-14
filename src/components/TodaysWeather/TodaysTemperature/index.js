import React from "react";
import "./TodaysTemperature.css";

import Temperature from "./Temperature";

const TodaysTemperature = ({ currentWeather }) => {
  return (
    <div className="c-TodaysTemperature">
      <Temperature
        temperature={Math.round(currentWeather.main.temp)}
        feels_like={Math.round(currentWeather.main.feels_like)}
        icon={currentWeather.weather[0].icon}
        weather={currentWeather.weather[0].main}
      />
    </div>
  );
};

export default TodaysTemperature;
