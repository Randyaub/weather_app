import React from "react";
import axios from "axios";

import "./Search.css";
import SearchInput from "./SearchInput";
import SearchHelpIcon from "./SearchHelpIcon";
import SearchError from "./SearchError";

const SearchBar = (props) => {
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
    <div className="c-SearchBar">
      <div className="c-SearchBar__search">
        <SearchInput
          search={search}
          query={props.query}
          setQuery={props.setQuery}
        />
        {!props.validSearch && <SearchError />}
      </div>
      <SearchHelpIcon />
    </div>
  );
};

export default SearchBar;
