import React from "react";
import S from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import Footer from "./Components/LandingPage/Footer.js";
import Error from "./Components/404Page/Error.js";
import About from "./Components/AboutUsPage/AboutUsPage.js"
import Service from "./Components/ServicePage/ServicePage.js"
import MenuHandler from "./Components/MenuPage.js/MenuHandler.js"
import Gallery from "./Components/GalleryPage/GalleryPage.js"


function App() {
  return (
    <>
      <Router>

        <Navbar/>

        <Routes>

          <Route exact path="/" element={<LandingPage />} />

          <Route
            exact
            path="/about/"
            element={
              <About/>
            }
          />
          <Route
            exact
            path="/service/"
            element={
              <Service/>
            }
          />
          <Route
            exact
            path="/gallery/"
            element={
              <Gallery/>
            }
          />
          <Route
            exact
            path="/menu/drinks/alcoholic/"
            element={
              <MenuHandler/>
            }
          />
          <Route
            exact
            path="/menu/drinks/non-alcoholic/"
            element={
              <MenuHandler/>
            }
          />
           <Route
            exact
            path="/menu/etables/veg/starters/"
            element={
              <MenuHandler/>
            }
          />
           <Route
            exact
            path="/menu/etables/veg/main-course/"
            element={
              <MenuHandler/>
            }
          />
           <Route
            exact
            path="/menu/etables/non-veg/starters/"
            element={
              <MenuHandler/>
            }
          />
           <Route
            exact
            path="/menu/etables/non-veg/main-course/"
            element={
              <MenuHandler/>
            }
          />

          <Route
            path="*"
            element={
              <Error/>
            }
          />
          
        </Routes>
        
        <Footer/>

      </Router>

    </>
  );
}

export default App;

// here by link whichever component is mounted or unmounted only navbar and footer component will remain same as it is
// for seo pupose in order to give spave between url word always use - (hypen)