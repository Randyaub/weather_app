import React from "react";
import "./LegendRow.css";

const LegendRow = (props) => {
  return (
    <div className="c-LegendRow">
      <span>{props.name}</span>
    </div>
  );
};

export default LegendRow;
