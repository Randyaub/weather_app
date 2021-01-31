import React from "react";
import axios from "axios";

import "./Search.css";

const Search = (props) => {
  const search = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `${process.env.REACT_APP_API_BASE}weather?q=${props.query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((result) => {
          props.setCurrentLoading(true);
          props.setCurrentWeather(result.data);
          props.setQuery("");
          props.setCurrentLoading(false);
          props.setValidSearch(true);
        })
        .catch((err) => {
          props.setValidSearch(false);
        });
      axios
        .get(
          `${process.env.REACT_APP_API_BASE}forecast?q=${props.query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((result) => {
          props.setForcastLoading(true);
          props.setFiveDayForcast(result.data.list);
          props.setQuery("");
          props.setForcastLoading(false);
          props.setValidSearch(true);
        })
        .catch((err) => {
          props.setValidSearch(false);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for location..."
        onChange={(e) => props.setQuery(e.target.value)}
        value={props.query}
        onKeyPress={search}
        className="search"
      />
      <i className="fas fa-search search-icon"></i>
      {props.validSearch === false ? (
        <h3 className="search-error">Please type the location again...</h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
