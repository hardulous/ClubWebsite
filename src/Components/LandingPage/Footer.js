import React from 'react'
import S from "./Styles/Footer.module.css"
import logo from "../../images/club-logo-fin.png"
import "../../icomon/style.css"


const Footer = () => {
  
  // opening of new url in new tab
  const handleMedia = (e)=>{
     
    // window.open(e.target.id, '_blank');

  }

  return (

    <div className={`${S.footerMain}`}>
        <div className={`${S.card1}`}>
          <p>Open At : 12:00 PM To 8:00 AM</p>
          <a href="mailto:support@kingrestaurantandbar.com" className='icon-envelop'>support@kingrestaurantandbar.com</a>
        </div>
        <div className={`${S.card2}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`${S.card3}`}>
          <a href='tel:8588888808' className='icon-phone'>91+ 8588888808</a>
          <p>LGF,JMD Regent Arcade Mall,MG Road,Gurugram</p>
        </div>
        <div className={`${S.MediaContainer}`}>
          <ul>
            <li id="https://www.facebook.com/King-Restaurant-Bar-109253075212893" onClick={handleMedia}></li>
            <li id="https://twitter.com/KingRestaurant3" onClick={handleMedia}></li>
            <li id="https://www.instagram.com/accounts/login/?next=/kingrestaurantbar/" onClick={handleMedia}></li>
          </ul>
        </div>
    </div>

  )

}

export default Footer