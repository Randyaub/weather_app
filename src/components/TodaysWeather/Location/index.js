import React from "react";

import { getDate } from "../../../utils/utils";

const Location = (props) => {
  return (
    <div>
      <h1>
        {props.currentWeather.name}, {props.currentWeather.sys.country} Weather
      </h1>
      <span>Updated on {getDate(props.currentWeather.dt)}</span>
    </div>
  );
};

export default Location;
