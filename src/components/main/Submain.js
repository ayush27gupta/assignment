import React from 'react'
import Panel from '../blackpanel/Panel'
import Cuisines from '../cuisines/Cuisines'
import NotificationBar from '../notification/NotificationBar'
import Popular from '../popular/Popular'
import Recommended from '../recommended/Recommended'
import Select from '../select/Select'
import './submain.css'

const Submain = () => {
  return (
    <div className='submain-container'>
        <NotificationBar/>
        <Select/>
        <Panel/>
        <Cuisines/>
        <Popular/>   
        <Recommended/>
    </div>
  )
}

export default Submain