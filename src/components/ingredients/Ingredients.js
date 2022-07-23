import React from 'react'
import './ingredients.css'
import NotificationBar from '../notification/NotificationBar'
import {Link} from 'react-router-dom'

const Ingredients = () => {
  return (
    <div className='container-ingredients'>
      <div>
        <NotificationBar/>
      </div>
      <div className='back-btn'>
        <Link to='/'>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="no img" height="10px" width="10px" />
          </div>
        </Link>
      </div>

      <div className="mughlai">
      <div className='title'>
        <h1>Masala Mughlai</h1>
        <p className='para'>Mughlai Masala is a style of cookery developed in the Indian subcontinent by the imperial kitchens of mughal empire</p>
        <p> <span><img src="https://c8.alamy.com/comp/MR4C99/black-time-clock-icon-isolated-on-white-background-MR4C99.jpg" alt="" height="20px" width="20px" /></span>  1 Hour</p>
      </div>
      <div className="img-title">
        <img src="https://media1.agfg.com.au/images/recipes/1401/hero-300.jpg" alt="" height="150px" width="200px" />
      </div>
      </div>
      <hr width="65%" style={{marginLeft:"11rem"}} />

      <div className="ingredients">
        <div className="ingre-inside1">
          <h4>Ingredients</h4>
        </div>
        <div className="ingre-inside2">
          <p>For 2 people</p>
        </div>
      </div>
      <hr width="65%" style={{marginLeft:"11rem"}} />

      <div className="vegetables">
        <div className="veg1">
          <h4>Vegetables &nbsp;
            <span>
              <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" height="10px" width="10px" />
            </span>
            </h4> 
        </div>
        <div className="veg2">
          <div className="veginside">
            <div className="veg-ingre">Cauliflower</div>
            <div className="veg-ingre">01 Pc</div>
          </div>
          <div className="veginside">
            <div className="veg-ingre">Tomato</div>
            <div className="veg-ingre">10pc</div>
          </div>
          <div className="veginside">
            <div className="veg-ingre">Spinach</div>
            <div className="veg-ingre">1Kg</div>
          </div>
        </div>
      </div>

      <div className="spices">
        <div className="spice1">
          <h4>Spices &nbsp;
            <span>
              <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="" height="10px" width="10px" />
            </span>
            </h4> 
        </div>
        <div className="spice2">
          <div className="veginside">
            <div className="veg-ingre">Coriander</div>
            <div className="veg-ingre">100 g</div>
          </div>
          <div className="veginside">
            <div className="veg-ingre">Mustard Oil</div>
            <div className="veg-ingre">1/2 Ltr</div>
          </div>
        </div>
      </div>

      <div className="appliances">
        <div className="appliances1">
          <h3>Appliances</h3>
           
        </div>
        <div className="appliances2">
         <div className="appliance-inside">
          <img src="https://www.lg.com/in/images/refrigerators/md07503754/gallery/GR-H812HLHQ-Refrigerators-Front-View-D-01.jpg" alt="" height="70px" width="100px" />
         </div>
         <div className="appliance-inside">
          <img src="https://www.lg.com/in/images/refrigerators/md07503754/gallery/GR-H812HLHQ-Refrigerators-Front-View-D-01.jpg" alt="" height="70px" width="100px" />
         </div>
         <div className="appliance-inside">
          <img src="https://www.lg.com/in/images/refrigerators/md07503754/gallery/GR-H812HLHQ-Refrigerators-Front-View-D-01.jpg" alt="" height="70px" width="100px" />
         </div>
        </div>
      </div>


    </div>
  )
}

export default Ingredients;