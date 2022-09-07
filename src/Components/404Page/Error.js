import React from 'react'
import S from "./Styles/Error.module.css"
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate = useNavigate();

  useEffect(()=>{

    document.querySelector(`.${S.errorHeadText}`).classList.add(`${S.fadeIn}`)

  },[])

  return (
     
    <>
    
      <div className={`${S.errorHeader}`}>
      <Helmet>
        <title>404 not found</title>
        <meta  name="description" content="404 Page of our site"/>
      </Helmet>
        <div className={`${S.errorHeadText}`}>
          <h1>404 Not Found</h1>
          <button onClick={()=>{
            navigate("/")
          }}>Back To Home</button>
        </div>
      </div>

    </>
    

  )
}

export default Error