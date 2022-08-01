import React, { useEffect, useState } from "react";
import S from "./Styles/HeaderBody.module.css";
import St from "./Styles/Body.module.css"
import beer from "../images/beer.png";
import Body from "./Body";

const HeaderBody = () => {
  const [showBeer, setshowBeer] = useState(true);

  useEffect(() => {

    if (showBeer) {

      setTimeout(() => {

        document.getElementsByClassName(`${S.beer}`)[0].classList.add(`${S.active}`);

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
        </div>
      ) : (
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
      )}
    </div>

    <div className={`${St.bodyContainer}`}>
        <Body/>
    </div>

    </>

  );
};

export default HeaderBody;

