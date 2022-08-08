import React from 'react'
import S from "./Styles/Footer.module.css"
import logo from "../images/club-logo-fin.png"
import "../icomon/style.css"


const Footer = () => {

  const handleMedia = (e)=>{
     
    console.log(e.target.id);

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
            <li id="facebook" onClick={handleMedia}></li>
            <li id="twitter" onClick={handleMedia}></li>
            <li id="insta" onClick={handleMedia}></li>
          </ul>
        </div>
    </div>

  )

}

export default Footer