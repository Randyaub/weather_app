import React from "react";
import "./TodaysWeather.css";

import Location from "./Location";
import TodaysTemperature from "./TodaysTemperature";
import TodaysWeatherDetails from "./TodaysWeatherDetails";

const TodaysWeather = ({ currentWeather, isLoading }) => {
  return (
    !isLoading &&
    typeof currentWeather.main != "undefined" && (
      <section className="c-TodaysWeather">
        <div>
          <Location currentWeather={currentWeather} />
          <div className="l-TodaysWeather">
            <TodaysTemperature currentWeather={currentWeather} />
            <TodaysWeatherDetails currentWeather={currentWeather} />
          </div>
        </div>
      </section>
    )
  );
};

export default TodaysWeather;
