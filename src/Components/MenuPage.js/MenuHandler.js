import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import S from "./Styles/Menu.module.css";
import img1 from "../../images/Menu/Cover Page.jpg";
import img2 from "../../images/Menu/Menu G....jpg";

const MenuHandler = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/menu/drinks/alcoholic" ||
      location.pathname === "/menu/drinks/non_alcoholic"
    ) {
      document
        .querySelector(`.${S.menuHeadContainer} h1`)
        .classList.add(`${S.fadeIn}`);
    } else {
      return;
    }
  }, []);

  console.log(location.pathname);
  if (
    location.pathname === "/menu/drinks/alcoholic" ||
    location.pathname === "/menu/drinks/non_alcoholic"
  ) {
    return (
      <>
        <div className={S.menuHeadContainer}>
          <h1>{location.pathname}</h1>
        </div>

        <div className={`${S.menuBody}`}>
          <div className={`${S.menu}`}>
            <div className={`${S.imgBox}`}>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <h4>VEGETERIAN</h4>
            </div>
            <div className={`${S.details}`}>
              <div className={`${S.content}`}>
                <h4>
                  <span>MENU</span>
                </h4>
                <ul>
                  <li>
                    <p>
                      CRISPY PEANUT PEARLS PEANUT MASALA TOSSED WITH ONION &
                      TOMATO TOPPED WITH SABUDANA TULLI
                    </p>
                    <span>336/-</span>
                  </li>
                  <li>
                    <p>
                      DAHI PAPDI BRUSCHETTAS MASALA PAPDI TOPPED WITH BEL WITH
                      DAHI & CHUTNEY POMENGANATE ON TOP
                    </p>
                    <span>396/-</span>
                  </li>
                  <li>
                    <p>
                      AVACADO CHATMASALA PAPDI TOPPED WITH AVACADO FRITTERS
                      SERVED WITH CHICKPEA NUTS
                    </p>
                    <span>496/-</span>
                  </li>
                  <li>
                    <p>
                      MASALA PAPAD ROLL ROLLED PAPAD STUFFED WITH TOMATO, ONION,
                      ALOO BHUJIY WITH IMLI ONION JELLY
                    </p>
                    <span>346/-</span>
                  </li>
                  <li>
                    <p>
                      VOLCANIC NACHOS NACHOS TOPPED WITH CHEESE, REFRIED BEANS,
                      SOUR CREAM, SALSA
                    </p>
                    <span>446/-</span>
                  </li>
                  <li>
                    <p>
                      NACHOS TOPPED WITH CHEESE, REFRIED BEANS, SOUR CREAM,
                      SALSA, CHICKEN
                    </p>
                    <span>496/-</span>
                  </li>
                  <li>
                    <p>
                      BEER BATTERED FRENCH FRIES BATTERED FRIES TOPPED WITH
                      CHEESE & CAJUN-SPICED SERVED WITH CHILLY MAYO
                    </p>
                    <span>396/-</span>
                  </li>
                  <li>
                    <p>
                      PAPAD PANEER POPCORN PANEER CUBES COATED WITH PAPAD SERVED
                      CRISPY & HOT SERVED WITH MAYO
                    </p>
                    <span>396/-</span>
                  </li>
                  <li>
                    <p>
                      HUMMUS & PITA NO, NEED FOR ANY EXPLANATION. ALL-TIME
                      FAVOURITE
                    </p>
                    <span>396/-</span>
                  </li>
                  <li>
                    <p>
                      CHEESE STICK MARINATED WITH ITALIAN SPICES &CRUMBED AS
                      PERFECTION
                    </p>
                    <span>416/-</span>
                  </li>
                  <li>
                    <p>
                      EXOTIC BRUSCHETTAS DICED VEGETABLE TOSSED WITH CHEESE
                      SAUCE & GRATINATED WITH BOCCONCINI
                    </p>
                    <span>416/-</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>404 NOT FOUND</h1>;
  }
};

export default MenuHandler;
