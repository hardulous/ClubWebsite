import React from 'react'
import { useEffect } from 'react'
import S from "./Styles/AboutHeader.module.css"

const AboutUsPage = () => {
 
  useEffect(() => {
   
    document.querySelector(`.${S.aboutContainer} h1`).classList.add(`${S.fadeIn}`);

  }, [])
  

  return (

    <div className={S.aboutContainer}>
      <h1>ABOUT US</h1>
    </div>

  )
  
}

export default AboutUsPage