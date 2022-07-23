import React from 'react'
import './time.css'

const Time = () => {
  return (
    <div className='time-main-container'>
        <div className="date-container">
                <div className="icon-date">
                    <img  className="icon-datex" src="https://uxwing.com/wp-content/themes/uxwing/download/13-time-date/calendar-color.png" alt="no img"  height="40px" width="40px"/>
                </div>
                <div className="date">
                    <span className="datex">21 May 2021</span>
                </div>
        </div>
        <div className="time-container">
                <div className="icon-time">
                <img src="https://banner2.cleanpng.com/20191207/acu/transparent-red-line-circle-icon-clock-vulnerability-scanning-amp-intelligence-proact5e44a643827d68.1486399415815573155345.jpg" alt=""  height="40px" width="40px"/>
                </div>
                <div className="time">
                  <span className="timex">10:30 PM - 12:30-PM</span>
                </div>
        </div>
    </div>
  )
}

export default Time