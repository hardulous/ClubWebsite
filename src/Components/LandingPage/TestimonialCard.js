import React from 'react';
import S from "./Styles/Testimonial.module.css";
import "./Styles/Testimonial2.css";
 
const TestimonialCard = ({id,name,message}) => {

  return (

    <div className={`${S.Testimonial}`}>

        <div className={`${S.testimonialImg}`}></div>

        <div className={`${S.testimonialText}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis corporis porro eaque, quasi temporibus iste provident magni rerum voluptates eum, aperiam reiciendis repellat iusto illo cum recusandae eveniet odio?</p>

            <h4>
                <span>Saira Conor</span>,
                Content Writer
            </h4>

        </div>
    </div>

  )

}

export default TestimonialCard