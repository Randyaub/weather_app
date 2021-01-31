import React from "react";
import "./NewsBanner.css";

const NewsBanner = () => {
  return (
    <div className="c-NewsBanner">
      <div className="c-NewsBanner__content">
        <h6 className="c-NewsBanner__message">
          Hover the question mark icon to the right of the search bar for more
          information.
        </h6>
      </div>
    </div>
  );
};

export default NewsBanner;
