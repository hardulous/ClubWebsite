import React from "react";
import S from "./Styles/Menu.module.css";
import img1 from "../../images/Menu/Cover Page.jpg";
import img2 from "../../images/Menu/Menu G....jpg";
import { useLocation } from "react-router-dom";

const Menu = ({Menu}) => {

  const location = useLocation();

  return (

    <>

      <div className={S.menuHeadContainer}>
        <h1>{Menu.heading.toUpperCase()}</h1>
      </div>

      <div className={`${S.menuBody}`}>
        <div className={`${S.menu}`}>
          <div className={`${S.imgBox}`}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <h4>{Menu.heading}</h4>
          </div>
          <div className={`${S.details}`}>
            <div className={`${S.content}`}>
              <h4>
                <span>MENU</span>
              </h4>
              
              {
                Menu.mainContent.map((menu,no1)=>{
                    
                    return <React.Fragment key={no1}>
                        <h3>{menu.subHeading}</h3>
                        <ul>
                            {
                                menu.content.map((menuItem,no2)=>{
                                    return <li key={no2}>
                                        <p>{menuItem.item}</p>
                                        <span>{menuItem.price}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </React.Fragment>

                })
              }

            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Menu;
