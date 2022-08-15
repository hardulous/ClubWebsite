import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import S from "./Styles/Navbar.module.css";
import logoTwo from "../../images/club-logo-fin.png";
import { IoBeerOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineArrowUp } from "react-icons/ai";
import beer from "../../images/Wine-final.png"

const Navbar = () => {

  // state variable to hide and show ham menu
  const [showHam, setshowHam] = useState(false);
  
  // using location object
  const location = useLocation()
  const toggleHam = () => {
    
    // if hamburger menu is open then body scroll is removed else shown
    if(!showHam){
      document.body.style.overflowY="hidden"
    }
    else{
      document.body.style.overflowY="scroll"
    }

    setshowHam(!showHam);
  };

  // function to style the current url present in browser
  const isActiveUrl = (path)=>{
    
    console.log(path,location.pathname)
    if(location.pathname===path){
      return {
        color:"#F1C760"
      }
    }
    else{
      return null
    }

  }

  useEffect(() => {
    const scrollElement = document.querySelector(`.${S.scrollTop}`);

    const topElement = document.querySelector(`.${S.head}`);

    const scrollTop = (e) => {
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
    
    const tracker = document.querySelector(`.${S.tracker}`);

    document.body.addEventListener('mousemove',(e)=>{

      tracker.style.left = `${e.clientX}px`
      tracker.style.top = `${e.clientY}px`

    })

  }, []);

  // this useeffect handle the case whenever we hit new url on browser we will go to top 0px height on that page with smooth effect and for new navbar for route other than home
  useEffect(()=>{
     
    window.scrollTo({ top: 0 , behavior:"smooth"});

    const navbar = document.querySelector(`.${S.head} header`);
    
    if(location.pathname==="/"){
      navbar.style.backgroundColor = "#060606"
      navbar.parentElement.style.position="relative"
    }
    else{
      navbar.style.backgroundColor = "transparent"
      navbar.parentElement.style.position="absolute"
    }

  },[location])

  return (
    <div className={`${S.head}`}>
      <header>
        <nav>
          <div className={`${S.menu} ${showHam ? S.active : ""}`}>
            <ul className={`${S.navmenu1} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/" className={`${S.navlink}`}
                
                // handling case for desktop view clicking on any of link will not hide the vertical scroll
                onClick={()=>{
                  if(showHam) toggleHam()
                  else return
                }}

                style={
                  isActiveUrl("/")
                }
                
                >
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
                        <a href="#"
                        
                        onClick={()=>{
                          if(showHam) toggleHam()
                          else return
                        }}

                        >Alcoholic</a>
                      </li>
                      <li>
                        <a href="#"
                        
                        onClick={()=>{
                          if(showHam) toggleHam()
                          else return
                        }}

                        >Non-Alcoholic</a>
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
                            <a href="#"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Starters</a>
                          </li>
                          <li>
                            <a href="#"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Main Course</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Non-Veg</a>

                        <ul className={S.subMenu}>
                          <li>
                            <a href="#"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Starters</a>
                          </li>
                          <li>
                            <a href="#"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Main Course</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/gallery" className={`${S.navlink}`}
                
                onClick={()=>{
                  if(showHam) toggleHam()
                  else return
                }}

                style={
                  isActiveUrl("/gallery")
                }

                >
                  GALLERY
                </Link>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/about" className={`${S.navlink}`}
                
                onClick={()=>{
                  if(showHam) toggleHam()
                  else return
                }}

                style={
                  isActiveUrl("/about")
                }
                
                >
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
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Scroll to top */}
          <div className={`${S.scrollTop}`}>
            <AiOutlineArrowUp />
          </div>
        </nav>

         {/* Custom cursor tracker */}
         <div className={S.tracker}>
           <img src={beer}/>
         </div>

      </header>
    </div>
  );
};

export default Navbar;
