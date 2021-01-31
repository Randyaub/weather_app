import React from "react";
import "./TodaysWeatherDetails.css";

import WeatherSubCategory from "./WeatherSubCategory";
import { direction, visibility, getHour, hPatoKpa } from "../../../utils/utils";

const TodaysWeatherDetails = (props) => {
  const subcategory = [
    {
      label: "Wind",
      value: Math.round(props.currentWeather.wind.speed),
      units: "km/h",
      vector: direction(props.currentWeather.wind.deg),
    },
    {
      label: "Humidity",
      value: Math.round(props.currentWeather.main.humidity),
      units: "%",
    },
    {
      label: "Visibility",
      value: visibility(Math.round(props.currentWeather.visibility)),
      units: "km",
    },
    {
      label: "Sunrise",
      value: getHour(Math.round(props.currentWeather.sys.sunrise)),
      units: "AM",
    },
    {
      label: "Wind gust",
      value: props.currentWeather.wind.gust
        ? props.currentWeather.wind.gust
        : "0",
      units: "km/h",
    },
    {
      label: "Pressure",
      value: hPatoKpa(props.currentWeather.main.pressure),
      units: "kPa",
    },
    {
      label: "Coverage",
      value: props.currentWeather.clouds.all,
      units: "%",
    },
    {
      label: "Sunset",
      value: getHour(props.currentWeather.sys.sunset),
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
