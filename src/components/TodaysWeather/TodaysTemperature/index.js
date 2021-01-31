import React from "react";
import "./TodaysTemperature.css";

import Temperature from "./Temperature";

const TodaysTemperature = (props) => {
  return (
    <div className="c-TodaysTemperature">
      <Temperature
        temperature={Math.round(props.currentWeather.main.temp)}
        feels_like={Math.round(props.currentWeather.main.feels_like)}
        icon={props.currentWeather.weather[0].icon}
        weather={props.currentWeather.weather[0].main}
      />
    </div>
  );
};

export default TodaysTemperature;
