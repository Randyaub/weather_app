import React from 'react'

import { getDay, getMonth_Day, hPatoKpa, direction } from '../../utils/utils'
import './ForcastColumn.css'

const ForcastColumn = props => {
    return (
        <div className="forcast-column">
            <div className="forcast-row">
                <span className="day">{getDay(props.day.dt)}</span>
                <span className="month-day">{getMonth_Day(props.day.dt)}</span>
            </div>
            <div className="forcast-row">
                <h5 className="forcast-description">{props.day.weather[0].description.replace(/^\w/, (c) => c.toUpperCase())}</h5>
            </div>
            <div>
                <img 
                    src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} 
                    alt="weather"
                    className="forcast-temperature-image"
                />
            </div>
            <div className="forcast-row">
                {/*Actual*/}
                <span className="temperature">{Math.round(props.day.main.temp)}</span>
                <span className="unit">°C</span>
            </div>
            <div className="forcast-row-sub">
                {/*Feels Like*/}
                <span className="temperature">{Math.round(props.day.main.feels_like)}</span>
                <span className="unit">°C</span>
            </div>
            <div className="forcast-row-sub">
                 {/*PoP*/}
                <span className="temperature">{Math.round(props.day.pop * 100)}</span>
                <span className="unit">%</span>
            </div>
            <div className="forcast-row-sub">
                 {/*Wind*/}
                <span className="temperature">{Math.round(props.day.wind.speed)}</span>
                <span className="vector"> {direction(props.day.wind.deg)} </span>
            </div>
            <div className="forcast-row-sub">
                {/*Cloudiness*/}
                <span className="temperature">{props.day.clouds.all}</span>
                <span className="unit">%</span>
            </div>
            <div className="forcast-row-sub">
                 {/*Humidity*/}
                <span className="temperature">{Math.round(props.day.main.humidity)}</span>
                <span className="unit">%</span>
            </div>
            <div className="forcast-row-sub">
                 {/*Pressure*/}
                <span className="temperature">{hPatoKpa(props.day.main.pressure)}</span>
                <span className="unit">kPa</span>
            </div>
            <div className="forcast-row-legend">
                <div className="legend-row">
                    <div>Feels like</div>
                </div>
                <div className="legend-row">
                    <div>POP</div>
                </div>
                <div className="legend-row">
                    <div>Wind  (km/h)</div>
                </div>
                <div className="legend-row">
                    <div>Cloudiness</div>
                </div>
                <div className="legend-row">
                    <div>Humidity</div>
                </div>
                <div className="legend-row">
                    <div>Pressure</div>
                </div>
            </div>
        </div>
    )
}

export default ForcastColumn