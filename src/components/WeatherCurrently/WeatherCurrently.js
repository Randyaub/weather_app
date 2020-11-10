import React from 'react'
import { direction, visibility, getHour, getDate, hPatoKpa } from '../../utils/utils'

import WeatherDetails from '../WeatherDetails/WeatherDetails'
import WeatherSubCategory from '../WeatherSubCategory/WeatherSubCategory'
import './WeatherCurrently.css'

const WeatherCurrently = props => {
    return (
        <div className="wc-today-content">
            <div className="wc-location">
                <h1>
                <span>{props.currentWeather.name}, {props.currentWeather.sys.country} Weather</span>
                </h1>
                <span>Updated on {getDate(props.currentWeather.dt)}</span>
            </div>
            <div className="wc-container">
                <div className="wc-sect-1">
                    <WeatherDetails temperature={Math.round(props.currentWeather.main.temp)} feels_like={Math.round(props.currentWeather.main.feels_like)} icon={props.currentWeather.weather[0].icon} weather={props.currentWeather.weather[0].main}/>
                </div>
                <div className="wc-sect-2">
                    <div className="flex-container">
                        <WeatherSubCategory label="Wind" value={Math.round(props.currentWeather.wind.speed)} units="km/h" vector={direction(props.currentWeather.wind.deg)}/> 
                        <WeatherSubCategory label="Humidity" value={Math.round(props.currentWeather.main.humidity)} units="%"/> 
                        <WeatherSubCategory label="Visibility" value={visibility(Math.round(props.currentWeather.visibility))} units="km"/> 
                        <WeatherSubCategory label="Sunrise" value={getHour(Math.round(props.currentWeather.sys.sunrise))} units="AM"/> 
                        <WeatherSubCategory label="Wind gust" value={props.currentWeather.wind.gust ? props.currentWeather.wind.gust : '0'} units="km/h"/> 
                        <WeatherSubCategory label="Pressure" value={hPatoKpa(props.currentWeather.main.pressure)} units="kPa"/> 
                        <WeatherSubCategory label="Coverage" value={props.currentWeather.clouds.all} units="%"/> 
                        <WeatherSubCategory label="Sunset" value={getHour(props.currentWeather.sys.sunset)} units="PM"/>   
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default WeatherCurrently