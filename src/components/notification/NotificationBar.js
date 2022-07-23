import React from 'react'
import './notification.css'

const NotificationBar = () => {
  return (
    <div className='notif-container'>
        <div className="main-notif">
            <div className="left-notif">
                <span>10:05 Am</span>
            </div>
            <div className="right-notif">
                <div className="network">
                    <img src="https://toppng.com/uploads/preview/mobile-network-svg-png-icon-free-download-mobile-network-icon-11563582116elrkiui2s1.png" alt="No img" height="10px" width="10px" />
                </div>
                <div className="wifi">
                    <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" alt="No img" height="10px" width="10px" />
                </div>
                <div className="battery">
                    <img src="https://www.stanthonyshs.org/wp-content/uploads/2020/10/battery-icon.jpg" alt="No img" height="10px" width="10px" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationBar