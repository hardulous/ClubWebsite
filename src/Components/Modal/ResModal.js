import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import Form from './Form'
import S from "./Styles/ResModal.module.css"

const ResModal = ({toggleModal}) => {
  
  const [Loading, setLoading] = useState(true)
 
  useEffect(()=>{

    // setTimeout(()=>{
    //    setLoading(!Loading)
    // },3000)

  },[])

  return (

    <div className={`${S.modalBackground}`} onClick={()=>{
       
      if(!Loading) toggleModal()
      else return 

    }}>
      
    {

      !Loading ?  
      
      <Form toggleModal={toggleModal}/>  :
      
      <Spinner/>
    }

  </div>

  )

}

export default ResModal