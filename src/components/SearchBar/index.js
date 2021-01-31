import React from "react";
import axios from "axios";

import "./SearchBar.css";
import SearchInput from "./SearchInput";
import SearchHelpIcon from "./SearchHelpIcon";
import SearchError from "./SearchError";

const SearchBar = (props) => {
  const search = () => {
    props.setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_BASE}weather?q=${props.query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((weather) => {
        props.setCurrentWeather(weather.data);
        props.setQuery("");
        props.setValidSearch(true);
        axios
          .get(
            `${process.env.REACT_APP_API_BASE}forecast?q=${props.query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          )
          .then((result) => {
            props.setFiveDayForcast(result.data.list);
            props.setQuery("");
            props.setValidSearch(true);
            props.setIsLoading(false);
          });
      })
      .catch(() => {
        props.setValidSearch(false);
        props.setIsLoading(false);
      });
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
