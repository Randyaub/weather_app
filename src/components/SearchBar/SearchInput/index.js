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
      />
      <i className="fas fa-search c-SearchInput__icon" onClick={props.search} />
    </span>
  );
};

export default SearchInput;
