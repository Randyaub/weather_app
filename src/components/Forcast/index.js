import React from "react";

import ForcastColumn from "./ForcastColumn";

import "./Forcast.css";
import ForcastLegend from "./ForcastLegend";

const Forcast = (props) => {
  const days = [
    props.fiveDayForcast[6],
    props.fiveDayForcast[14],
    props.fiveDayForcast[22],
    props.fiveDayForcast[30],
    props.fiveDayForcast[38],
  ];

  return (
    props.loadingCurrent === false &&
    props.loadingForcast === false &&
    typeof props.fiveDayForcast[0] != "undefined" && (
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
