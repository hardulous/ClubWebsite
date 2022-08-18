import React from 'react'
import S from "./Styles/ResModal.module.css"

const ResModal = ({toggleModal}) => {

  return (

    <div className={`${S.modalBackground}`} onClick={toggleModal}>
      
    <div className={`${S.modal}`} onClick={(e)=>{
      e.stopPropagation();
    }}>

      <div className={S.modalCloseBtn} onClick={toggleModal}>X</div>
      <div className={`${S.modalHeader}`}>
        <h2>My Modal</h2>
      </div>
      <div className={`${S.modalBody}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam asperiores, impedit esse in accusantium dolor ipsa eligendi voluptatibus animi suscipit doloremque mollitia omnis nam incidunt tempore eveniet eos autem architecto.
      </div>
      <div className={`${S.modalFooter}`}>
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>

  </div>

  )

}

export default ResModal