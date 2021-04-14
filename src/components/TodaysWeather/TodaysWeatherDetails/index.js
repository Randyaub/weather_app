import React from "react";
import "./TodaysWeatherDetails.css";

import WeatherSubCategory from "./WeatherSubCategory";
import { direction, visibility, getHour, hPatoKpa } from "../../../utils/utils";

const TodaysWeatherDetails = ({ currentWeather }) => {
  //Current weather Details
  const subcategory = [
    {
      label: "Wind",
      value: Math.round(currentWeather.wind.speed),
      units: "km/h",
      vector: direction(currentWeather.wind.deg),
    },
    {
      label: "Humidity",
      value: Math.round(currentWeather.main.humidity),
      units: "%",
    },
    {
      label: "Visibility",
      value: visibility(Math.round(currentWeather.visibility)),
      units: "km",
    },
    {
      label: "Sunrise",
      value: getHour(Math.round(currentWeather.sys.sunrise)),
      units: "AM",
    },
    {
      label: "Wind gust",
      value: currentWeather.wind.gust ? currentWeather.wind.gust : "0",
      units: "km/h",
    },
    {
      label: "Pressure",
      value: hPatoKpa(currentWeather.main.pressure),
      units: "kPa",
    },
    {
      label: "Coverage",
      value: currentWeather.clouds.all,
      units: "%",
    },
    {
      label: "Sunset",
      value: getHour(currentWeather.sys.sunset),
      units: "PM",
    },
  ];

  return (
    <div className="c-TodaysWeatherDetails">
      {subcategory.map((subcategory, index) => {
        return (
          <WeatherSubCategory
            key={index}
            label={subcategory.label}
            value={subcategory.value}
            units={subcategory.units}
            vector={subcategory.vector}
          />
        );
      })}
    </div>
  );
};

export default TodaysWeatherDetails;
