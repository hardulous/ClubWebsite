import React, { useEffect, useState } from "react";
import S from "./Styles/Reservation.module.css";
import St from "./Styles/ResCard.module.css";
import "./Styles/Reservation2.css";
import "../../icomon/style.css";
import club from '../../images/club-imageOne.webp'
import {useNavigate} from "react-router-dom"
// react datapicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResModal from "../Modal/ResModal";

const Reservation = () => {

  const navigate = useNavigate()

  // state variable for calendar
  const [selectedDay, setSelectedDay] = useState(new Date());

  // console.log(`
  
  //   Day = ${selectedDay.getDate()}
  //   Month = ${selectedDay.getMonth()}
  //   Year = ${selectedDay.getFullYear()}
  
  // `);

  useEffect(()=>{

    document.querySelector('.react-datepicker__input-container>input').setAttribute('readonly',true);

  })

  const [showModal, setshowModal] = useState(false);

  const toggleModal = ()=>{

    if(!showModal){
      document.body.style.overflowY="hidden"
    }
    else{
      document.body.style.overflowY="scroll"
    }

    setshowModal(!showModal)

  }
  

  return (
    <div className={`${S.resMain}`}>

      {
        showModal ? <ResModal toggleModal={toggleModal}/> : ""
      }

      <div>
        <div className={`${S.upperHeader}`}>
          <h1>MAKE A RESERVATION</h1>
          <p>
          We are always there to serve you as per your requirement, so if you want to organize your event in gurgaon, you will be delighted with our adaptable venue spaces and creative catering options.Whether for a corporate event or personal celebration, get in contact with us today, and we'll take care of all the hassles in preparing for your next event 
          </p>
        </div>
        <div className={`${S.upperForm}`}>
          <form>

            <div className={`${S.input}`}>
              <a href="#" className="icon-user-plus"></a>
              <select>
                <option value="">No Of Person</option>
                <option value="">1 Person</option>
                <option value="">2 Persons</option>
                <option value="">3 Persons</option>
                <option value="">4 Persons</option>
                <option value="">5 Persons</option>
                <option value="">More Than 5</option>
              </select>
            </div>

            <div className={`${S.input}`}>
              <a href="#" className="icon-food_bank"></a>
              <select>
                <option value="">Select The Table</option>
                <option value="">Vip</option>
                <option value="">Deluxe-Vip</option>
                <option value="">Premium-Vip</option>
                <option value="">Dome-Vip</option>
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
                <option value="">Pick A Time</option>
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
              <button type="submit" onClick={(e)=>{

                e.preventDefault();
                toggleModal();
                
              }}>Find A Tabel</button>
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
                <button type="submit" onClick={()=>{
                  
                  navigate("/about")

                }}>READ MORE</button>
              </div>
            </div>

          </div>

          <div className={`${S.colCard}`}>

            <div className={`${St.cardImgBody}`}>
              <div className={`${St.cardImage}`}>
                <img src={club} alt="club.png" />
              </div>
              <div className={`${St.imgdesc}`}>
                <button onClick={()=>{

                  navigate("/gallery")

                }}>VIEW MORE</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Reservation;
