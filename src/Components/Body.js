import React from 'react'
import St from "./Styles/Body.module.css"
import {CardData} from './Data/CardData.js'
import Card from './Card'

const Body = () => {

  return (

    <div className={`${St.mainBody}`}>

      <div className={`${St.bodyOne}`}>

        <div className={`${St.bodyHeading}`}>
          <h2>
          A TASTE OF THE COUNTRYSIDE IN THE HEART OF THE CITY
          </h2>
        </div>

        <div className={`${St.bodyOneText}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque recusandae at et temporibus saepe dolor ab cum laudantium natus iste earum nihil qui autem nam, repellat pariatur, quo ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias inventore tempora. Illum ipsa assumenda, velit nostrum architecto ex, maiores ipsum laudantium doloremque aliquam nesciunt omnis iusto maxime rerum reprehenderit.</p>
        </div>

      </div>

      <div className={`${St.bodyTwo}`}>
         <div className={`row`}>
           <div className={`col-3`}>
             <Card card={CardData}/>
           </div>
         </div>
      </div>

    </div>

  )
  
}

export default Body