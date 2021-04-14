import React from "react";
import "./ForcastRow.css";

const ForcastRow = ({ value, secondary }) => {
  return (
    <div className="c-ForcastRow">
      <span>{value}</span>
      <span className="c-ForcastRow__secondary">{secondary}</span>
    </div>
  );
};

export default ForcastRow;
