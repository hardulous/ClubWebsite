import React, { useEffect, useState } from "react";
import S from "./Styles/HeaderBody.module.css";
import St from "./Styles/Body.module.css"
import Ss from "./Styles/BodyTwo.module.css"
import Sst from "./Styles/Reservation.module.css"
import S2 from "./Styles/Footer.module.css"
// import beer from "../images/beer.png";
import beer from '../images/wine.png'
import Body from "./Body";
import BodyTwo from "./BodyTwo";
import Reservation from "./Reservation";
import Footer from "./Footer";

const HeaderBody = () => {
  const [showBeer, setshowBeer] = useState(true);

  useEffect(() => {

    if (showBeer) {

      setTimeout(() => {

        document.querySelector(`.${S.beer}`).classList.add(`${S.active}`);

        setTimeout(() => {

          setshowBeer(!showBeer);

        }, 2000);

      }, 10000);

    } 
    else {

      setTimeout(() => {

        const text = document.querySelector(`.animateText`).children;
        const textLength = text.length;
        let index = 0;
        const textInTimer = 3000,
          textOutTimer = 2800;

          animate(text,index,textInTimer,textOutTimer,textLength);

      }, 3000);

    }
  }, [showBeer]);

  const animate = (text,index,textInTimer,textOutTimer,textLength) => {

      if (index === 0) {

        text[textLength - 1].classList.remove(`${S.textIn}`, `${S.textOut}`);
      }
      else {

        text[index - 1].classList.remove(`${S.textIn}`, `${S.textOut}`);
      }

      text[index].classList.add(`${S.textIn}`);

      setTimeout(function () {

        text[index].classList.add(`${S.textOut}`);

      }, 2800);

      const Id = setTimeout(function () {

        if (index === textLength - 1) {

          index = 0;

        } else {

          index++;
        }

        animate(text,index,textInTimer,textOutTimer,textLength);

      }, 3000);

  };

  return (
    
    <>
    
    <div className={`container-fluid ${S.container}`}>
      {showBeer ? (
        <div className={`${S.beer}`}>
          <img src={beer} alt="Beer.png" className={`${S.beerImg}`} />
          <span className={`${S.beerText}`}>K</span>
          <span className={`${S.beerText}`}>I</span>
          <span className={`${S.beerText}`}>N</span>
          <span className={`${S.beerText}`}>G</span>
          <span className={`${S.beerText}`}>B</span>
          <span className={`${S.beerText}`}>A</span>
          <span className={`${S.beerText}`}>R</span>
          <span className={`${S.hunterText}`}>Restaurant</span>
        </div>
      ) : 
      
      (
        <div className={`${S.textContainer}`}>
          <section className={`${S.home}`}>
            <div className={`${S.containerSmall}`}>
              <div>
                <div className={`${S.homeText}`}>
                  <h1>King's Restaurant and bar</h1>
                  <p className="animateText">
                    <span>Welcome</span>
                    <span>Best club in gurugram</span>
                    <span>Great environment</span>
                    <span>Offordable price</span>
                    <span>Book your table now!</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
      }
    </div>

    <div className={`${St.bodyContainer}`}>
        <Body/>
    </div>

    <div className={`${Ss.bodyTwoContainer}`}>
      <BodyTwo/>
    </div>

    <div className={`${Sst.ReservationContainer}`}>
       <Reservation/>
    </div>

    <div className={`${S2.FooterContainer}`}>
       <Footer/>
    </div>

    </>

  );
};

export default HeaderBody;
