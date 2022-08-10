import React, { useEffect } from 'react'
import S from './Styles/Card.module.css'
import img from "../../images/icon-beer.png"

const Card = ( props ) => {

  const {name,icon,desc,alias} = props.card;
  
  return (

    <div className={`${S.card}`}>

      <a href="#">
        <img src={icon} alt={`${alias}.png`} />        
        <span className={`${S.iconText}`}>{alias}</span>
      </a>

      <div className={`${S.cardBody}`}>

         <div className={`${S.cardHeading}`}>
           <h6>{name}</h6>
         </div>
         <div className={`${S.cardDesc}`}>
          <p>{desc}</p>
         </div>

      </div>

    </div>

  )

}

export default Card