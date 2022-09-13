import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import Form from "./Form";
import S from "./Styles/ResModal.module.css";

const ResModal = ({ toggleModal, Reservation, handleReservation }) => {
  const [Loading, setLoading] = useState(true);
  
  // in this useeffect we will fetch table details need for payment
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // method to create a order from client and pay using razorpay
  const checkoutHandler = async (amount) => {

    const response1 = await fetch("http://localhost:4000/api/getKey")
    const key = await response1.json();

    const response2 = await fetch("http://localhost:4000/api/checkout", {
      method:'POST',
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify({amount,Reservation})
    });

    const data = await response2.json()
    
    if(data.success){
      setLoading(true);
    }
    
    const options = {
      key,
      amount: `${data.order.amount}`,
      currency: "INR",
      name: "Ecommerce",
      description: "Here is your product just pay",
      image: "http://example.com/your_logo",
      order_id: data.order.id,

      callback_url: `http://localhost:4000/api/paymentverification/${data.linked_cus_id}`, // on this callback_url a post req is hit by razorpay on successfull payment and not even this your frontend is also redirected to this url as well

      prefill: {
        name: Reservation.name,
        email: Reservation.gmail,
        contact: Reservation.number,
      },
      notes: {
        address: "Mg Road , Gurgaon , Haryana",
      },
      theme: {
        color: "#F0E351",
      },
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open(); // open the dialog box of payment

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };

  return (
    <div
      className={`${S.modalBackground}`}
      onClick={() => {
        if (!Loading) toggleModal();
        else return;
      }}
    >
      {!Loading ? (
        <Form
          toggleModal={toggleModal}
          Reservation={Reservation}
          handleReservation={handleReservation}
          checkoutHandler={checkoutHandler}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ResModal;
