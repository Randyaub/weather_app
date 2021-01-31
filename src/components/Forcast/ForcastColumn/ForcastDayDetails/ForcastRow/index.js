import React from "react";
import "./ForcastRow.css";

const ForcastRow = (props) => {
  return (
    <div className={props.className}>
      <span>{props.value}</span>
      <span className="c-ForcastRow__secondary">{props.secondary}</span>
    </div>
  );
};

export default ForcastRow;
