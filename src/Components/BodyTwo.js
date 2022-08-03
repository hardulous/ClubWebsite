import React from 'react'
import S from './Styles/BodyTwo.module.css'

const BodyTwo = () => {

  return (

    <div className={`${S.bodyTwoMain}`}>

       <div className={`${S.imgContainer}`}>
  
          <img src="https://pubzinne.axiomthemes.com/wp-content/uploads/2020/03/img-new-2-copyright.png" alt="Club.png" />         

       </div>

       <div className={`${S.textContainer}`}>

          <div className={S.text}>

            <div className={`${S.upperText}`}>
                <h1>FOOD, DRINKS & THE BEST ATMOSPHERE IN TOWN</h1>
                <p>Good beer brings people together. That’s why every one of our beers is crafted with the simple purpose of helping people spend meaningful time with each other.</p>
            </div>

            <div className={`${S.lowerText}`}>
                <ul>
                    <li>original drinks</li>
                    <li>delicious food</li>
                    <li>great Atmosphere</li>
                </ul>
            </div>

          </div>

       </div>

    </div>

  )

}

export default BodyTwo