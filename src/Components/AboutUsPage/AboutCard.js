import React from 'react'
import S from "./Styles/AboutCard.module.css"

const AboutCard = ({Card}) => {

  return (

    <>
    
      <div className={S.imgContainer}>
        <img src={Card.img} alt="AboutImg.png" />
      </div>
      <div className={S.cardContainer}>
        <h4>{Card.heading}</h4>
        <p>{Card.description}</p>
      </div>

    </>

  )
}

export default AboutCard