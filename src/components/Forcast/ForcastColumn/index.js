import React from "react";

import "./ForcastColumn.css";
import ForcastDayDetails from "./ForcastDayDetails";
import ForcastDaySummary from "./ForcastDaySummary";

const ForcastColumn = (props) => {
  return (
    <div className="c-ForcastColumn">
      <ForcastDaySummary day={props.day} />
      <ForcastDayDetails day={props.day} />
    </div>
  );
};

export default ForcastColumn;
