import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import S from "./Styles/Navbar.module.css";
// import logoTwo from "../../images/club-logo-fin.png";
import { IoBeerOutline } from "react-icons/io5";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";

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
    
    if(location.pathname===path){
      return {
        color:"var(--main-color)"
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

  }, []);

  // this useeffect handle the case whenever we hit new url on browser we will go to top 0px height on that page with smooth effect and for new navbar for route other than home
  useEffect(()=>{
     
    window.scrollTo({ top: 0 , behavior:"smooth"});

    const navbar = document.querySelector(`.${S.head} header`);
    
    if(location.pathname==="/"){
      navbar.style.backgroundColor = "var(--secondary-color)"
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
                        <Link to="/menu/drinks/alcoholic"
                        
                        onClick={()=>{
                          if(showHam) toggleHam()
                          else return
                        }}

                        >Alcoholic</Link>
                      </li>
                      <li>
                        <Link to="/menu/drinks/non_alcoholic"
                        
                        onClick={()=>{
                          if(showHam) toggleHam()
                          else return
                        }}

                        >Non-Alcoholic</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">e-Tables</a>

                    <ul className={S.subMenu}>
                      <li>
                        <a href="#">Veg</a>

                        <ul className={S.subMenu}>
                          <li>
                            <Link to="/menu/etables/veg/starters"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Starters</Link>
                          </li>
                          <li>
                            <Link to="/menu/etables/veg/main_course"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Main Course</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Non-Veg</a>

                        <ul className={S.subMenu}>
                          <li>
                            <Link to="/menu/etables/non_veg/starters"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Starters</Link>
                          </li>
                          <li>
                            <Link to="/menu/etables/non_veg/main_course"
                            
                            onClick={()=>{
                              if(showHam) toggleHam()
                              else return
                            }}

                            >Main Course</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <Link to="/service" className={`${S.navlink}`}
                
                onClick={()=>{
                  if(showHam) toggleHam()
                  else return
                }}

                style={
                  isActiveUrl("/service")
                }

                >
                  SERVICE
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
                  src='https://ik.imagekit.io/amanbisht/images/logo.png'
                  alt="club-logo"
                  className={`${S.navimage}`}
                />
              </li>
            </ul>

            <ul className={`${S.navmenu3} ${S.marginutil} ${S.paddingutil}`}>
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}>
                <span>
                  <HiOutlinePhotograph />
                </span>
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
              <li className={`${S.navitem} ${showHam ? S.active : ""}`}  
              
              onClick={()=>{
                  if(showHam){
                    toggleHam()
                    window.location.href="/#Reservation"
                  }
                  else{
                    window.location.href="/#Reservation"
                  }
                }}>

                <span>
                  <IoBeerOutline />
                </span>
                <a href="/#Reservation" className={`${S.navlink}`}
              
                style={
                  isActiveUrl("/#Reservation")
                }

                >
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

      </header>
    </div>
  );
};

export default Navbar;
