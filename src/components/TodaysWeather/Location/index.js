import React from "react";

import { getDate } from "../../../utils/utils";

const Location = ({ currentWeather }) => {
  return (
    <div>
      <h1>
        {currentWeather.name}, {currentWeather.sys.country} Weather
      </h1>
      <span>Updated on {getDate(currentWeather.dt)}</span>
    </div>
  );
};

export default Location;
