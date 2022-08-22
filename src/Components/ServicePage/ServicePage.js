import React from "react";
import { useEffect } from "react";
import S from "./Styles/ServicePage.module.css";
import {ServiceData} from "../Data/ServiceData.js"
import ServiceCard from "./ServiceCard";

const ServicePage = () => {

  useEffect(() => {

    document.querySelector(`.${S.serviceHeader} h1`).classList.add(`${S.fadeIn}`);

  }, []);

  return (

    <>

      <div className={`${S.serviceHeader}`}>
        <h1>SERVICES</h1>
      </div>

      <div className={`${S.serviceBody}`}>
      {ServiceData.map((Card, i) => {
          return (
            <div className={S.row} key={i}>
              <ServiceCard Card={Card} seq={i} />
            </div>
          );
        })}
      </div>

    </>
  );
};

export default ServicePage;

// For 2 times i witness the error of not a valid query selector because inside query selector or any other selector we can not pass the identifier name with some rule like , Identifiers can't start with a digit, two hyphens, or a hyphen followed by a digit. if error comes then simply change the class name and try again
