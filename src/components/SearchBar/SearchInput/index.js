import React from "react";
import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <span className="c-SearchInput">
      <input
        className="c-SearchInput__input"
        type="text"
        placeholder="Search for location..."
        onChange={(e) => props.setQuery(e.target.value)}
        value={props.query}
        onKeyPress={props.search}
      />
      <i className="fas fa-search c-SearchInput__icon"></i>
    </span>
  );
};

export default SearchInput;
