import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

import Search from './components/Search/Search'
import WeatherCurrently from './components/WeatherCurrently/WeatherCurrently'
import Forcast from './components/Forcast/Forcast'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({})
  const [fiveDayForcast, setFiveDayForcast] = useState({})
  const [query, setQuery] = useState('')
  const [loadingCurrent, setCurrentLoading] = useState(true)
  const [loadingForcast, setForcastLoading] = useState(true)
  const [validSearch, setValidSearch] = useState(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( async (position) => {
      const { latitude, longitude } = position.coords
      //Sets to users location
      axios.get(`${process.env.REACT_APP_API_BASE}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(result => {
        setCurrentWeather(result.data)
        setCurrentLoading(false)
      }) 
      .catch(err => {
      })
      axios.get(`${process.env.REACT_APP_API_BASE}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(result => {
        setFiveDayForcast(result.data.list)
        setForcastLoading(false)
      })
      .catch(err => {
      })
      }, (err) => {
        //otherwise default to calgary
        axios.get(`${process.env.REACT_APP_API_BASE}weather?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(result => {
          setCurrentWeather(result.data)
          setCurrentLoading(false)
        }) 
        .catch(err => {
        })
        
        axios.get(`${process.env.REACT_APP_API_BASE}forecast?q=calgary&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(result => {
          setFiveDayForcast(result.data.list)
          setForcastLoading(false)
        })
        .catch(err => {
        })
      })  
     
  }, [])

  return (
    <>
      <div className="App"> 
        <div className="content">
          <div className="news-banner">
            <div className="news-content">
              <h6 className="news-blurb">Weather Data provided for you!</h6>
            </div>
          </div>
          <div className="title-section">
            <img className="website-logo" src="weather-logo.png" alt="logo"></img>
          </div>
          <div className="container-wrapper">
            <div className="nav">
              <Search 
              setCurrentWeather={setCurrentWeather} 
              setFiveDayForcast={setFiveDayForcast} 
              setQuery={setQuery}
              query={query}
              setCurrentLoading={setCurrentLoading}
              setForcastLoading={setForcastLoading}
              setValidSearch={setValidSearch}
              validSearch={validSearch}
              />  
              <div> 
                <i className="fas fa-question-circle search-help"></i> 
                <div className="search-box">
                  <i className="fas fa-sort-up carrot-up"></i>
                  <p className="search-helper">The search format is as follows... (city, country code) Ex. Calgary, CA</p>
                </div> 
              </div>
            </div> 
            {loadingCurrent === false && loadingForcast === false ? 
              <section className="main-container">
                {(typeof currentWeather.main != "undefined") ? (  
                  <WeatherCurrently currentWeather={currentWeather}/>  
                ) : ('')}
              </section>
              :
              <section className="main-container loading">
                <img className="loading" src="loading.svg" alt="loading"></img>
              </section>
             }
          </div>
          <br />
          <div className="container-wrapper">
          {loadingCurrent === false && loadingForcast === false ? 
            <section>
            {(typeof fiveDayForcast[0] != "undefined") ? (  
              <Forcast fiveDayForcast={fiveDayForcast}/>
            ) : ('')}
            </section>
            :
            <section className="forcast-loading">
              <img className="loading" src="loading.svg" alt="loading"></img>
            </section>
            }
          </div>
        </div>
        <footer>
          <h6 className="footer-content">Weather App powered by <a className="openweather-link" rel="noopener noreferrer" href="https://openweathermap.org/" target='_blank'>OpenWeatherMap API</a></h6>
          <h6 className="footer-content">Created by Randy Aubichon</h6>
        </footer>
      </div> 
    </>  
  )
}

export default App;
