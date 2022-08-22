import React from "react";
import S from "./Styles/Form.module.css";
import "../../icomon/style.css"

const Form = ({ toggleModal }) => {

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
          <input type="text" placeholder="Your Name" />
        </div>

        <div className={`${S.inputBox} icon-form-envelop`}>
          <input type="gmail" placeholder="Your Gmail" />
        </div>

        <div className={`${S.inputBox} icon-form-phone`}>
          <input type="number" placeholder="Your Phone Number"
          />
        </div>

        <div className={`${S.inputBox} icon-form-credit-card`}>
          <select>
            <option value="#">Payment Option</option>
            <option value="upi">UPI</option>
            <option value="debit-card">DEBIT CARD</option>
            <option value="credit-card">CREDIR CARD</option>
          </select>
        </div>

        <button type="submit" className={`${S.inputBox}`} onClick={(e)=>{
          e.preventDefault();
        }}>
          Proceed To Pay
        </button>
      </form>
    </div>
  );
};

export default Form;

// {`${S.modal}`} onClick={(e) => {
//   e.stopPropagation();
// }}
