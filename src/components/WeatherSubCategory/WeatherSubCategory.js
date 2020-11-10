import React from 'react'
import './WeatherSubCategory.css'

const WeatherDetails = props => {
    return (
        <div className="weather-details">
            <span className="label">{props.label}</span>
            <span className="value">{props.value}</span>
            <div className="units">
                {props.vector ? <span className="vector">{props.vector}</span> : ''}
                <span className="metric">{props.units}</span>
            </div>
        </div>
    )
}

export default WeatherDetails