import React from 'react'
import './recommended.css'

const Recommended = () => {
  return (
    <div className='recommended-container'>
        <div className="left-recommended">
            <h3>Recommended <span><img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" height="10px" width="10px" /></span></h3> 
        </div>
        <div className="right-recommended">
            <div className="recommended-menu">
                <span >Menu</span>
            </div>
        </div>
    </div>
  )
}

export default Recommended