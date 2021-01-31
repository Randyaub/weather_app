import React from "react";
import "./ForcastLegend.css";
import LegendRow from "./LegendRow";

const rowContents = [
  "Feels Like",
  "POP",
  "Wind (km/h)",
  "Cloudiness",
  "Humidity",
  "Pressure",
];

const ForcastLegend = () => {
  return (
    <div className="c-ForcastLegend">
      {rowContents.map((content, index) => {
        return <LegendRow key={index} name={content} />;
      })}
    </div>
  );
};

export default ForcastLegend;
