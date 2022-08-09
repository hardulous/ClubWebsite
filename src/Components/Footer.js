import React from 'react'
import S from "./Styles/Footer.module.css"
import logo from "../images/club-logo-fin.png"
import "../icomon/style.css"


const Footer = () => {
  
  // opening of new url in new tab
  const handleMedia = (e)=>{
     
    window.open(e.target.id, '_blank');

  }

  return (

    <div className={`${S.footerMain}`}>
        <div className={`${S.card1}`}>
          <p>Open At : 6:00 PM To 2:00 AM</p>
          <a href="mailto:amanbisht123abc@gmail.com" className='icon-envelop'>amanbisht123abc@gmail</a>
        </div>
        <div className={`${S.card2}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`${S.card3}`}>
          <a href='tel:18001234567' className='icon-phone'>1 (800) 123-4567</a>
          <p>Mg Road,Gurugram,Haryana:110023</p>
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