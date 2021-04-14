import React from "react";
import { hPatoKpa, direction } from "../../../../utils/utils";
import ForcastRow from "./ForcastRow";

const ForcastDayDetails = ({ day }) => {
  //Specific details of the day
  const details = [
    //Feels Like
    { value: Math.round(day.main.feels_like), secondary: "°C" },
    //Propability of Precipitation
    { value: Math.round(day.pop * 100), secondary: "%" },
    //Wind Speed
    {
      value: Math.round(day.wind.speed),
      secondary: direction(day.wind.deg),
    },
    //Cloudiness
    { value: day.clouds.all, secondary: "%" },
    //Humidity
    { value: Math.round(day.main.humidity), secondary: "%" },
    //Pressure
    { value: hPatoKpa(day.main.pressure), secondary: "kPa" },
  ];

  return (
    <div>
      {details.map((detail, index) => {
        return (
          <ForcastRow
            key={index}
            value={detail.value}
            secondary={detail.secondary}
          />
        );
      })}
    </div>
  );
};

export default ForcastDayDetails;
