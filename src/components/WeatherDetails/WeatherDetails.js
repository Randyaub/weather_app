import React from 'react'

import './WeatherDetails.css'

const WeatherToday = props => {
    return(
        <>
            <div className="wd-content">
                <span className="wd-temperature">{props.temperature}</span>
                <div>
                    <div className="wd-unit-wrap">
                      <span className="wd-temp-unit">°C</span>
                    </div>
                    <p className="wd-feels-like">
                        <span className="label">FEELS LIKE</span> 
                        <span className="value">{props.feels_like}</span>
                    </p>
                </div>
                <div>
                    <img 
                        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} 
                        alt="weather"
                        className="wd-temperature-image"
                    />
                </div>
            </div>
            <span>{props.weather}</span>
        </>
    )
}

export default WeatherToday