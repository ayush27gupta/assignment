import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <div className='card-container'>
      <div className="left-card">
          <div className="card-left1">
            <div className="cardleftinside1">Masala Mughlai</div>
            <div className="cardleftinside2">
              <img src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg" alt="" height="10px" width="10px" />
              </div>
            <div className="cardleftinside3"> 
              4.2
            </div>
          </div>
          <div className="card-left2">
            <div className="card-left-inside1">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3474/3474313.png" alt="" height="20px" width="20px" />
                </div>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3474/3474313.png" alt="" height="20px" width="20px" />
              </div>
            </div>
            <div className="card-left-inside2">
              <span className='ingre'><Link to='/ingredients'>Ingredients</Link></span>
            </div>
          </div>
          <div className="card-left3">
            <div className='text'>
              Chicken fried in deep tomato sauce and spices
            </div>
          </div>
      </div>
      <div className="right-card">
        
      </div>
    </div>
  )
}

export default Card