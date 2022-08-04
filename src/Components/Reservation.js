import React from "react";
import S from "./Styles/Reservation.module.css";

const Reservation = () => {
  return (
    <div className={`${S.resMain}`}>
      <div className={`${S.resUpper}`}>
        <div className={`${S.upperHeader}`}>
          <h1>MAKE A RESERVATION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            numquam ut vero atque pariatur tenetur ex, repellat quae magni
            perferendis magnam nulla et recus
          </p>
        </div>
        <div className={`${S.upperForm}`}>

          <form>

            <div className={`${S.input}`}>
              <input type="text" id="people"></input>
            </div>

            <div className={`${S.input}`}>
              <input type="text" id="date"></input>
            </div>

            <div className={`${S.input}`}>
              <input type="text" id="time"></input>
            </div>

            <div className={`${S.input}`}>
              <input type="text" id=""></input>
            </div>
            
          </form>

        </div>
      </div>

      <div className={`${S.resLower} container-fluid`}>
        <div className="row">
          <div className="col offset-2">hello1</div>
          <div className="col offset-2">hello2</div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
