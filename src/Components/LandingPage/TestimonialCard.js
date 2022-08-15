import React, { useEffect } from 'react';
import S from "./Styles/Testimonial.module.css";
import "./Styles/Testimonial2.css";
 
const TestimonialCard = ({data}) => { 
  
  return (

    <div className={`${S.Testimonial}`}>

        <div className={`${S.testimonialImg}`} style={{

           backgroundImage : data.img != "" ? `url(${data.img})` : ""

        }}></div>

        <div className={`${S.testimonialText}`}>
            <p>
              {data.message}
            </p>

            <h4>
                <span>
                  {data.name}
                </span>
            </h4>

        </div>
    </div>

  )

}

export default TestimonialCard