import React, { useState } from "react";
import S from "./Styles/Navbar.module.css";
import logotwo from "../images/club-logo2.png";
import {IoBeerOutline} from 'react-icons/io5'
import {VscFeedback} from 'react-icons/vsc' 

const Navbar = () => {
  // state variable to hide and show ham menu
  const [showHam, setshowHam] = useState(false);

  const toggleHam = () => {
    setshowHam(!showHam);
  };

  return (
    <div className={`${S.head}`}>
      <header className={`${S.header}`}>
        <nav className={`${S.navbar}`}>
          <div className={`${S.menu} ${showHam ? S.active : ""}`}>
            <ul className={`${S.navmenu1} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <a href="#" className={`${S.navlink}`}>
                  HOME
                </a>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <a href="#" className={`${S.navlink}`}>
                  ABOUT
                </a>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <a href="#" className={`${S.navlink}`}>
                  BLOG
                </a>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <a href="#" className={`${S.navlink}`}>
                  SHOP
                </a>
              </li>
            </ul>

            <ul className={`${S.navmenu2} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <img src={logotwo} alt="club-logo" className={`${S.navimage}`} />
              </li>
            </ul>

            <ul className={`${S.navmenu3} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}> 
                <span><VscFeedback/></span>
                <a href="#" className={`${S.navlink}`}>
                  TESTIMONIAL
                </a>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}> 
                <span><IoBeerOutline/></span>
                <a href="#" className={`${S.navlink}`}>
                  RESERVATION
                </a>
              </li>
            </ul>
          </div>

          {/* this is hamburger button */}
          <div
            className={`${S.hamburger} ${showHam ? S.active : ""}`}
            onClick={toggleHam}
          >
            <span className={`${S.bar}`}></span>
            <span className={`${S.bar}`}></span>
            <span className={`${S.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
