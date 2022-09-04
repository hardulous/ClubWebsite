import React from "react";
import { useEffect } from "react";
import S from "./Styles/AboutHeader.module.css";
import S2 from "./Styles/AboutCard.module.css"
import { AboutCardData } from "../Data/AboutCardData.js";
import AboutCard from "./AboutCard";
import { Helmet } from "react-helmet";
const AboutUsPage = () => {

  useEffect(() => {

    document.querySelector(`.${S.aboutHeaderContainer} h1`).classList.add(`${S.fadeIn}`);
  
    const cardObserver = new IntersectionObserver((entries) => {
        
        entries.forEach((entry) => {
          
          entry.target.classList.toggle(`${S2.appear}`, entry.isIntersecting);

          if (entry.isIntersecting) {
            cardObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold:0,
        rootMargin:"0px 0px -300px 0px"
      }
    );

    const Cards = document.querySelectorAll(`.${S.row}>div`);
    
    Cards.forEach((card)=>{

      cardObserver.observe(card);  

    })

}, []);

  return (
    <>
      <Helmet>
        <title>King's Bar And Restaurant - About</title>
        <meta  name="description" content="About Page of our site"/>
      </Helmet>
      <div className={S.aboutHeaderContainer}>
        <h1>ABOUT US</h1>
      </div>

      <div className={S.aboutBody}>
        {AboutCardData.map((Card, i) => {
          return (
            <div className={S.row} key={i}>
              <AboutCard Card={Card} seq={i} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutUsPage;
