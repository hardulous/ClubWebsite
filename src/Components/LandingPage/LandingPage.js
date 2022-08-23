import React, { useEffect, useState } from "react";
import S from "./Styles/LandingPage.module.css";
import St from "./Styles/Body.module.css";
import Ss from "./Styles/BodyTwo.module.css";
import Sst from "./Styles/Reservation.module.css";
import S1 from "./Styles/Testimonial.module.css";
import beer from '../../images/Wine-final.png';
import Body from "./Body";
import BodyTwo from "./BodyTwo";
import Reservation from "./Reservation";
import Testimonial from "./Testimonial";

const HeaderBody = () => {
  const [showBeer, setshowBeer] = useState(true);

  useEffect(() => {

    if (showBeer) {

    const container = document.querySelector(`.${S.container}`)
    let index =0;
    const ImageArray = new Array(
      "../../images/3.jpg",
      "../../images/5.jpg",
      "../../images/6.jpg",
      "../../images/8.jpg"
    )

    function slider(){
      
      if(index>ImageArray.length-1){
         index=0;
      }
      container.style.background = `url(${ImageArray[index]});`
      index++;
      setTimeout(slider,3000);

    }

    var stopTimeOut=setTimeout(() => {

        document.querySelector(`.${S.beer}`).classList.add(`${S.active}`);

        setTimeout(() => {

          setshowBeer(!showBeer);

        }, 2000);

      }, 10000);

    var stopBackground = setTimeout(()=>{
        
        slider();

    },0)

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

    return ()=>{
      clearTimeout(stopTimeOut);
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
                  <h1>King's Restaurant and Bar</h1>
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

    <div className={`${Sst.ReservationContainer}`} id="Reservation">
       <Reservation/>
    </div>

    <div className={`${S1.TestimonialContainer}`} id="Testimonial">
    <h1>TESTIMONIALS</h1>
       <Testimonial/>
    </div>

    {/* <div className={`${S2.FooterContainer}`}>
       <div className={`${S2.footerBanner}`}>
         <h4>Give your tastebuds a<br />taste of ultimate authority</h4>
       </div>
       <Footer/>
    </div> */}

    </>

  );
};

export default HeaderBody;
