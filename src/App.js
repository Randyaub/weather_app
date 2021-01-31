import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import TodaysWeather from "./components/TodaysWeather";
import Forcast from "./components/Forcast/Forcast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar/Search";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [fiveDayForcast, setFiveDayForcast] = useState({});
  const [query, setQuery] = useState("");
  const [loadingCurrent, setCurrentLoading] = useState(true);
  const [loadingForcast, setForcastLoading] = useState(true);
  const [validSearch, setValidSearch] = useState(true);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    // async (position) => {
    //   const { latitude, longitude } = position.coords;
    //   //Sets to users location
    //   axios
    //     .get(
    //       `${process.env.REACT_APP_API_BASE}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    //     )
    //     .then((result) => {
    //       setCurrentWeather(result.data);
    //       setCurrentLoading(false);
    //     })
    //     .catch((err) => {});
    //   axios
    //     .get(
    //       `${process.env.REACT_APP_API_BASE}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    //     )
    //     .then((result) => {
    //       setFiveDayForcast(result.data.list);
    //       setForcastLoading(false);
    //     })
    //     .catch((err) => {});
    // },
    // (err) => {
    //   //otherwise default to calgary
    //   axios
    //     .get(
    //       `${process.env.REACT_APP_API_BASE}weather?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    //     )
    //     .then((result) => {
    //       setCurrentWeather(result.data);
    //       setCurrentLoading(false);
    //     })
    //     .catch((err) => {});
    //   axios
    //     .get(
    //       `${process.env.REACT_APP_API_BASE}forecast?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    //     )
    //     .then((result) => {
    //       setFiveDayForcast(result.data.list);
    //       setForcastLoading(false);
    //     })
    //     .catch((err) => {});
    // }
    //);
  }, []);

  return (
    <>
      <div className="App">
        <div>
          <Header />
          <div className="container-wrapper">
            <SearchBar
              setCurrentWeather={setCurrentWeather}
              setFiveDayForcast={setFiveDayForcast}
              setQuery={setQuery}
              query={query}
              setCurrentLoading={setCurrentLoading}
              setForcastLoading={setForcastLoading}
              setValidSearch={setValidSearch}
              validSearch={validSearch}
            />
            <TodaysWeather
              currentWeather={currentWeather}
              loadingCurrent={loadingCurrent}
              loadingForcast={loadingForcast}
            />
          </div>
          <br />
          <div className="container-wrapper">
            <Forcast
              fiveDayForcast={fiveDayForcast}
              loadingCurrent={loadingCurrent}
              loadingForcast={loadingForcast}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
