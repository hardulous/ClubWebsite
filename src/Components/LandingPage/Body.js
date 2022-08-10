import React, { useEffect } from 'react'
import St from "./Styles/Body.module.css"
import {CardData} from '../Data/CardData.js'
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
          HAVE A SEAT AND LET THE FUN BEGIN
          </h2>
        </div>

        <div className={`${St.bodyOneText} ${St.fadeIn}`}>
          <p>Tranform your mediocre day into luxurious and exciting experience at the king's restaurant and bar located in the hear of the millennium city - gurgaon.<br /><br />King's is all about serving for all tastes and all occasions.So whether you are catching up with your friends, family, or date, or want to have a corporate event, we aim to harbour you for any situation.Your guests will be thrilled as you bring your event to reality.<br /><br />
          </p>
        </div>

      </div>

      <div className={`${St.bodyTwo}`}>
         <div className={`row`}>
          {
            CardData.map((card,i)=>{

              return  <div className={`col-12 col-sm-6 col-md-3 mb-3 ${St.slideIn}`} key={i}>
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