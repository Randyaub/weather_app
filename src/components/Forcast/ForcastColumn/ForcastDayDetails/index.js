import React from "react";
import "./ForcastDayDetails.css";

import { hPatoKpa, direction } from "../../../../utils/utils";
import ForcastRow from "./ForcastRow";

const ForcastDayDetails = (props) => {
  const details = [
    { value: Math.round(props.day.main.feels_like), secondary: "°C" },
    { value: Math.round(props.day.pop * 100), secondary: "%" },
    {
      value: Math.round(props.day.wind.speed),
      secondary: direction(props.day.wind.deg),
    },
    { value: props.day.clouds.all, secondary: "%" },
    { value: Math.round(props.day.main.humidity), secondary: "%" },
    { value: hPatoKpa(props.day.main.pressure), secondary: "kPa" },
  ];

  return (
    <div>
      {details.map((detail, index) => {
        return (
          <ForcastRow
            key={index}
            value={detail.value}
            secondary={detail.secondary}
            className="c-ForcastDayDetails"
          />
        );
      })}
    </div>
  );
};

export default ForcastDayDetails;
