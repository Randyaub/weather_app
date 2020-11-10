import React from 'react'

import ForcastColumn from '../ForcastColumn/ForcastColumn'

import './Forcast.css'

const Forcast = (props) => {
    return (
        <div className="forcast-container">
            <h4 className="forcast-title">Next 5 Days</h4>
            <div className="forcast-wrapper">
                <ForcastColumn day={props.fiveDayForcast[6]}/>
                <ForcastColumn day={props.fiveDayForcast[14]}/>
                <ForcastColumn day={props.fiveDayForcast[22]}/>
                <ForcastColumn day={props.fiveDayForcast[30]}/>
                <ForcastColumn day={props.fiveDayForcast[38]}/>
            </div>
        </div>
    )
}

export default Forcast