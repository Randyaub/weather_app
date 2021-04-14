import React from "react";

import ForcastColumn from "./ForcastColumn";

import "./Forcast.css";
import ForcastLegend from "./ForcastLegend";

const Forcast = ({ fiveDayForcast, isLoading }) => {
  //API returns an array of objects
  const days = [
    fiveDayForcast[6],
    fiveDayForcast[14],
    fiveDayForcast[22],
    fiveDayForcast[30],
    fiveDayForcast[38],
  ];

  return (
    !isLoading &&
    typeof fiveDayForcast[0] != "undefined" && (
      <section className="c-Forcast">
        <h4 className="c-Forcast__title">Next 5 Days</h4>
        <div className="l-Forcast">
          {days.map((day, index) => {
            return <ForcastColumn key={index} day={day} />;
          })}
        </div>
        <ForcastLegend />
      </section>
    )
  );
};

export default Forcast;
