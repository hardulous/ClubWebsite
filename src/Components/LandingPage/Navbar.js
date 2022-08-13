import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import S from "./Styles/Navbar.module.css";
import logoTwo from "../../images/club-logo-fin.png";
import { IoBeerOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineArrowUp } from "react-icons/ai";

const Navbar = () => {
  // state variable to hide and show ham menu
  const [showHam, setshowHam] = useState(false);

  const toggleHam = () => {
    setshowHam(!showHam);
  };

  useEffect(() => {
    const scrollElement = document.querySelector(`.${S.scrollTop}`);

    const topElement = document.querySelector(`.${S.head}`);

    const scrollTop = (e) => {
      console.log("TOP");
      topElement.scrollIntoView({
        behavior: "smooth",
      });
    };

    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        scrollElement.classList.add(`${S.active}`);
        scrollElement.addEventListener("click", scrollTop);
      } else {
        scrollElement.classList.remove(`${S.active}`);
        scrollElement.removeEventListener("click", scrollTop);
      }
    });
  }, []);

  return (
    <div className={`${S.head}`}>
      <header className={`${S.header}`}>
        <nav className={`${S.navbar}`}>
          <div className={`${S.menu} ${showHam ? S.active : ""}`}>
            <ul className={`${S.navmenu1} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/" className={`${S.navlink}`}>
                  HOME
                </Link>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <a href="#" className={`${S.navlink}`}>
                  MENU
                </a>

                <ul className={S.subMenu}>
                  <li>
                    <a href="#">Drinks</a>

                    <ul className={S.subMenu}>
                      <li>
                        <a href="#">Alcoholic</a>
                      </li>
                      <li>
                        <a href="#">Non-Alcoholic</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Tables</a>

                    <ul className={S.subMenu}>
                      <li>
                        <a href="#">Veg</a>

                        <ul className={S.subMenu}>
                          <li>
                            <a href="#">Starters</a>
                          </li>
                          <li>
                            <a href="#">Main Course</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Non-Veg</a>

                        <ul className={S.subMenu}>
                          <li>
                            <a href="#">Starters</a>
                          </li>
                          <li>
                            <a href="#">Main Course</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/gallery" className={`${S.navlink}`}>
                  GALLERY
                </Link>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/About" className={`${S.navlink}`}>
                  ABOUT
                </Link>
              </li>
            </ul>

            <ul className={`${S.navmenu2} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <img
                  src={logoTwo}
                  alt="club-logo"
                  className={`${S.navimage}`}
                />
              </li>
            </ul>

            <ul className={`${S.navmenu3} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <span>
                  <VscFeedback />
                </span>
                <a href="/#Testimonial" className={`${S.navlink}`}>
                  TESTIMONIAL
                </a>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <span>
                  <IoBeerOutline />
                </span>
                <a href="/#Reservation" className={`${S.navlink}`}>
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

          {/* Scroll to top */}
          <div className={`${S.scrollTop}`}>
            <AiOutlineArrowUp />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
