import React from 'react'
import S from "./Styles/ServiceCard.module.css"

const ServiceCard = ({Card,seq}) => {
 
  if (seq===0) {
    return (
      <>
        <div className={`${S.imgContainer}`}>
          <img src={Card.img} alt="AboutImg.png" />
        </div>
        <div className={`${S.cardContainer}`}>
          <h4>{Card.heading}</h4>
          <p className={`${S.newLine}`}>{Card.description}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`${S.cardContainer}`}>
          <h4>{Card.heading}</h4>
          <p>{Card.description}</p>
        </div>
        <div className={`${S.imgContainer}`}>
          <img src={Card.img} alt="AboutImg.png" />
        </div>
      </>
    );
  }

}

export default ServiceCard