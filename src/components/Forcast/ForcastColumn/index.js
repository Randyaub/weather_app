import React from "react";

import "./ForcastColumn.css";
import ForcastDayDetails from "./ForcastDayDetails";
import ForcastDaySummary from "./ForcastDaySummary";

const ForcastColumn = ({ day }) => {
  return (
    <div className="c-ForcastColumn">
      <ForcastDaySummary day={day} />
      <ForcastDayDetails day={day} />
    </div>
  );
};

export default ForcastColumn;
