import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import TodaysWeather from "./components/TodaysWeather";
import Forcast from "./components/Forcast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [fiveDayForcast, setFiveDayForcast] = useState({});
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [validSearch, setValidSearch] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        //Sets to users location
        retrieveLocation(
          `${process.env.REACT_APP_API_BASE}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
          `${process.env.REACT_APP_API_BASE}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
      },
      //If geolocation doesnt get a value
      () => {
        //otherwise default to calgary
        retrieveLocation(
          `${process.env.REACT_APP_API_BASE}weather?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
          `${process.env.REACT_APP_API_BASE}forecast?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
      }
    );
  }, []);

  const retrieveLocation = (currentWeatherURL, forcastURL) => {
    //otherwise default to calgary
    axios.get(currentWeatherURL).then((result) => {
      setCurrentWeather(result.data);
      axios
        .get(
          `${process.env.REACT_APP_API_BASE}forecast?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((result) => {
          setFiveDayForcast(result.data.list);
          setIsLoading(false);
        });
    });
  };

  return (
    <>
      {isLoading === false ? (
        <div className="App">
          <div>
            <Header />
            <div className="l-App__current">
              <SearchBar
                setCurrentWeather={setCurrentWeather}
                setFiveDayForcast={setFiveDayForcast}
                setQuery={setQuery}
                query={query}
                setIsLoading={setIsLoading}
                setValidSearch={setValidSearch}
                validSearch={validSearch}
              />
              <TodaysWeather
                currentWeather={currentWeather}
                isLoading={isLoading}
              />
            </div>
            <br />
            <div className="l-App__forcast">
              <Forcast fiveDayForcast={fiveDayForcast} isLoading={isLoading} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
