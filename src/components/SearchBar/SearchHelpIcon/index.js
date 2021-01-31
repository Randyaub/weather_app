import React from "react";
import "./SearchHelpIcon.css";

const SearchHelpIcon = () => {
  return (
    <div className="c-SearchHelpIcon">
      <i className="c-SearchHelpIcon__icon fas fa-question-circle"></i>
      <div className="c-SearchHelpIcon__popup">
        <i className="fas fa-sort-up" />
        <p>
          The search format is as follows... (city, country code) Ex. Calgary,
          CA
        </p>
      </div>
    </div>
  );
};

export default SearchHelpIcon;
