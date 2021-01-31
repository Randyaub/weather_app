import React from "react";
import "./ForcastDaySummary.css";

import ForcastImage from "./ForcastImage";
import { getDay, getMonth_Day } from "../../../../utils/utils";

const ForcastDaySummary = (props) => {
  return (
    <div className="c-ForcastDaySummary">
      <div className="c-ForcastDaySummary__row">
        <span className="c-ForcastDaySummary__day">{getDay(props.day.dt)}</span>
        <span className="c-ForcastDaySummary__date">
          {getMonth_Day(props.day.dt)}
        </span>
      </div>
      <div className="c-ForcastDaySummary__row">
        <h5 className="c-ForcastDaySummary__description">
          {props.day.weather[0].description.replace(/^\w/, (c) =>
            c.toUpperCase()
          )}
        </h5>
      </div>
      <div>
        <ForcastImage
          url={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="c-ForcastDaySummary__row">
        {/*Actual*/}
        <span className="temperature">{Math.round(props.day.main.temp)}</span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
};

export default ForcastDaySummary;
