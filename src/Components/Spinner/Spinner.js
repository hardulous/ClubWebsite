import React from "react";
import S from "./Styles/Spinner.module.css"
const Spinner = () => {

  return (

    <div className={S.loader}>
      <span className={S.dots}  style={{ "--i": 1 }} ></span>
      <span className={S.dots}  style={{ "--i": 2 }} ></span>
      <span className={S.dots}  style={{ "--i": 3 }} ></span>
      <span className={S.dots}  style={{ "--i": 4 }} ></span>
      <span className={S.dots}  style={{ "--i": 5 }} ></span>
      <span className={S.dots}  style={{ "--i": 6 }} ></span>
      <span className={S.dots}  style={{ "--i": 7 }} ></span>
      <span className={S.dots}  style={{ "--i": 8 }} ></span>
      <span className={S.dots}  style={{ "--i": 9 }} ></span>
      <span className={S.dots}  style={{ "--i": 10 }} ></span>
    </div>

  );
  
};

export default Spinner;
