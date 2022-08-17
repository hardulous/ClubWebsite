import React from "react";
import S from "./Styles/AboutCard.module.css";

const AboutCard = ({ Card, seq }) => {

  if (seq % 2 == 0) {
    return (
      <>
        <div className={`${S.imgContainer} ${S.leftCard}`}>
          <img src={Card.img} alt="AboutImg.png" />
        </div>
        <div className={`${S.cardContainer} ${S.rightCard}`}>
          <h4>{Card.heading}</h4>
          <p>{Card.description}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`${S.cardContainer} ${S.leftCard}`}>
          <h4>{Card.heading}</h4>
          <p>{Card.description}</p>
        </div>
        <div className={`${S.imgContainer} ${S.rightCard}`}>
          <img src={Card.img} alt="AboutImg.png" />
        </div>
      </>
    );
  }
};

export default AboutCard;
