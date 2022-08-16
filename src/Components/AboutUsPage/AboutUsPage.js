import React from 'react'
import { useEffect } from 'react'
import S from "./Styles/AboutHeader.module.css"
import {AboutCardData} from "../Data/AboutCardData.js"
import AboutCard from './AboutCard'

const AboutUsPage = () => {
 
  useEffect(() => {
   
    document.querySelector(`.${S.aboutHeaderContainer} h1`).classList.add(`${S.fadeIn}`);

  }, [])
  

  return (

    <>
    
    <div className={S.aboutHeaderContainer}>
      <h1>ABOUT US</h1>
    </div>

    <div className={S.aboutBody}>
        {
          AboutCardData.map((Card,i)=>{
            return <div className={S.row} key={i}>
                  <AboutCard Card={Card}/>
             </div>
          })
        }
    </div>

    </>

  )
  
}

export default AboutUsPage