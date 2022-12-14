import React, { useEffect, useRef } from 'react'
import S from "./Styles/Testimonial.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import {TestimonialCardData} from "../Data/TestimonialCardData.js"

const Testimonial = () => {
  
  const slider = useRef("");

  // setting for slider
  const settings = {

    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,

  };

  useEffect(() => {
    
    // play();
   

  }, [])
  

  const play =()=>{
    slider.current.slickPlay();
  }

  return (

    <div className={`${S.TestimonialMain}`}>

      <Slider {...settings} ref={slider}>
         {
            TestimonialCardData.map((t,i)=>{
              return <TestimonialCard key={i} data={t}/>
            })
         }
      </Slider>

    </div>

  )

}

export default Testimonial