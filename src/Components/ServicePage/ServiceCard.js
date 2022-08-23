import React from 'react'
import S from "./Styles/ServiceCard.module.css"
import "../../icomon/style.css"
import triangle from "../../images/triangle.svg"
const ServiceCard = ({Card,seq}) => {
 
  if (seq===0) {
    return (
      <>
        <div className={`${S.imgContainer} ${S.leftCard}`}>
          <img src={Card.img} alt="AboutImg.png" />
        </div>
        <div className={`${S.cardContainer} ${S.rightCard}`}>
          <h4>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><title>Trangle Icon</title><polygon points="114.29 6.22 17.1 121.78 17.1 6.22 114.29 6.22"/></svg>
            {Card.heading}
            </h4>
          <p className={`${S.newLine}`}>{Card.description}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`${S.cardContainer} ${S.leftCard}`}>
          <h4>
             <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><title>Trangle Icon</title><polygon points="114.29 6.22 17.1 121.78 17.1 6.22 114.29 6.22"/></svg>
            {Card.heading}
            </h4>
          <p className={`${S.newLine}`}>{Card.description}</p>
        </div>
        <div className={`${S.imgContainer} ${S.rightCard}`}>
          <img src={Card.img} alt="AboutImg.png" />
        </div>
      </>
    );
  }

}

export default ServiceCard