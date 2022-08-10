import React from 'react'
import S from './Styles/BodyTwo.module.css'
import logo from "../../images/food-banner.png"

const BodyTwo = () => {

  return (

    <div className={`${S.bodyTwoMain}`}>

       <div className={`${S.imgContainer}`}>
  
          <img src={logo} alt="Club.png" />         

       </div>

       <div className={`${S.textContainer}`}>

          <div className={S.text}>

            <div className={`${S.upperText}`}>
                <h1>FOOD, DRINKS & THE BEST ATMOSPHERE IN TOWN</h1>
                <p>We are dedicated to providing world-class facilities. At king's bar and resturant you can have a meaningful experience with your friends and family while also enjoying food and belly-warming drinks.</p>
            </div>

            <div className={`${S.lowerText}`}>
                <ul>
                    <li>Original Drinks</li>
                    <li>Delicious Food</li>
                    <li>Great Atmosphere</li>
                </ul>
            </div>

          </div>

       </div>

    </div>

  )

}

export default BodyTwo