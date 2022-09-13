import React from "react";
import S from "./Styles/Form.module.css";
import "../../icomon/style.css"

const Form = ({ toggleModal,Reservation,handleReservation,checkoutHandler }) => {

  return (

    <div className={`${S.modal} ${S.modalForm}`} onClick={(e)=>{
      e.stopPropagation();
    }}>

      <div className={`${S.modalCloseBtn}`} onClick={toggleModal}>
        <span>|</span>
        <span>|</span>
      </div>

      <h1>CREDENTIALS</h1>
      <hr />

      <form>
        <div className={`${S.inputBox} icon-form-user`}>
          <input type="text" value={Reservation.name} placeholder="Your Name" name="name" onChange={handleReservation}/>
        </div>

        <div className={`${S.inputBox} icon-form-envelop`}>
          <input type="gmail" value={Reservation.gmail} placeholder="Your Gmail" name="gmail" onChange={handleReservation}/>
        </div>

        <div className={`${S.inputBox} icon-form-phone`}>
          <input type="number" value={Reservation.number} placeholder="Your Phone Number" name="number" onChange={handleReservation}
          />
        </div>

        <div className={`${S.inputBox} icon-form-credit-card`}>
          <select name="paymentMethod" value={Reservation.paymentMethod} onChange={handleReservation}>
            <option value="#">Payment Option</option>
            <option value="upi">UPI</option>
            <option value="debit-card">DEBIT CARD</option>
            <option value="credit-card">CREDIR CARD</option>
          </select>
        </div>

        <button type="submit" className={`${S.inputBox} icon-form-banknote`} onClick={(e)=>{
          e.preventDefault();
          checkoutHandler(100);
        }}>
          Proceed To Pay
        </button>
      </form>
    </div>
  );
};

export default Form;

