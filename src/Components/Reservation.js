import React, { useState } from "react";
import S from "./Styles/Reservation.module.css";
import St from "./Styles/ResCard.module.css";
import "./Styles/Reservation2.css";
import "../icomon/style.css";
import club from '../images/club-imageOne.png'

// react datapicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  // state variable for calendar
  const [selectedDay, setSelectedDay] = useState(new Date());

  console.log(`
  
    Day = ${selectedDay.getDate()}
    Month = ${selectedDay.getMonth()}
    Year = ${selectedDay.getFullYear()}
  
  `);

  return (
    <div className={`${S.resMain}`}>
      <div>
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
              <a className="icon-user-plus"></a>
              <select>
                <option value="">No of Person</option>
                <option value="">1 Person</option>
                <option value="">2 Persons</option>
                <option value="">3 Persons</option>
                <option value="">4 Persons</option>
                <option value="">5 Persons</option>
              </select>
            </div>

            <div className={`${S.input}`}>
              <a href="#" className="icon-calendar"></a>

              <DatePicker
                selected={selectedDay}
                onChange={(date) => setSelectedDay(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                // here by filter we will not allow user tp pick sat and sun date

                filterDate={(data) => {
                  return data.getDay() != 6 && data.getDay() != 0;
                }}
                calendarClassName={`${S.calClass}`}
              />
            </div>

            <div className={`${S.input}`}>
              <a href="#" className="icon-alarm"></a>
              <select type="text">
                <option value="">Pick A Day</option>
                <option value="">9:00 Am</option>
                <option value="">11:00 Am</option>
                <option value="">1:00 Am</option>
                <option value="">3:00 Pm</option>
                <option value="">5:00 Pm</option>
                <option value="">7:00 Pm</option>
                <option value="">9:00 Pm </option>
              </select>
            </div>

            <div className={`${S.input}`}>
              <button type="submit">Find A Tabel</button>
            </div>
          </form>
        </div>
      </div>

      <div className={`${S.resLower} container-fluid`}>
        <div className="row justify-content-around">

          <div className={`${S.colCard}`}>

            <div className={`${St.cardBody}`}>
              <div className={`${St.cardHeader}`}>
                <h1>COME OVER AND ENJOY LIVE SPORTS</h1>
                <p>Every Monday, Tuesday and Wednesday evening, we’re offering groups of 10 or more that book a table in our bar a complimentary serving of beer</p>
              </div>
              <div className={`${St.button}`}>
                <button type="submit">READ MORE</button>
              </div>
            </div>

          </div>

          <div className={`${S.colCard}`}>

            <div className={`${St.cardImgBody}`}>
              <div className={`${St.cardImage}`}>
                <img src={club} alt="club.png" />
              </div>
              <div className={`${St.imgdesc}`}>
                <button>VIEW MORE</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Reservation;
