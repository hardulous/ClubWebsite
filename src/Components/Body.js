import React, { useEffect } from 'react'
import St from "./Styles/Body.module.css"
import {CardData} from './Data/CardData.js'
import Card from './Card'

const Body = () => {
  
  useEffect(() => {
   
   const fadeEle = document.querySelectorAll(`.${St.fadeIn}`)
   const slideEle = document.querySelectorAll(`.${St.slideIn}`)

   const observer = new IntersectionObserver(entries=>{
      
      entries.forEach(entry=>{

        entry.target.classList.toggle(`${St.appear}`,entry.isIntersecting)

        if(entry.isIntersecting){
          observer.unobserve(entry.target);
        }

      })

   },{
    threshold:1,
    rootMargin:"-30px 0px 0px 0px"
   });

   fadeEle.forEach(ele=>{
     observer.observe(ele);
   })
   slideEle.forEach(ele=>{
    observer.observe(ele);
  })

    
  }, [])
  

  return (

    <div className={`${St.mainBody}`}>

      <div className={`${St.bodyOne}`}>

        <div className={`${St.bodyHeading} ${St.fadeIn}`}>
          <h2>
          A TASTE OF THE COUNTRYSIDE IN THE HEART OF THE CITY
          </h2>
        </div>

        <div className={`${St.bodyOneText} ${St.fadeIn}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque recusandae at et temporibus saepe dolor ab cum laudantium natus iste earum nihil qui autem nam, repellat pariatur, quo ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias inventore tempora. Illum ipsa assumenda, velit nostrum architecto ex, maiores ipsum laudantium doloremque aliquam nesciunt omnis iusto maxime rerum reprehenderit.</p>
        </div>

      </div>

      <div className={`${St.bodyTwo}`}>
         <div className={`row`}>
          {
            CardData.map((card,i)=>{

              return  <div className={`col-12 col-sm-6 col-md-4 col-lg mb-3 ${St.slideIn}`} key={i}>
              <Card card={card}/>
            </div>

            })
          }
         </div>
      </div>

    </div>

  )
  
}

export default Body