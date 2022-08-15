import React from "react";
import S from "./App.module.css";
import S1 from "./Components/LandingPage/Styles/Footer.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage.js";
import ServicePage from "./Components/ServicePage/ServicePage.js";
import GalleryPage from "./Components/GalleryPage/GalleryPage.js";
import Footer from "./Components/LandingPage/Footer.js";

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>

        <div className={`${S1.FooterContainer}`}>
          <div className={`${S1.footerBanner}`}>
            <h4>
              Give your tastebuds a<br />
              taste of ultimate authority
            </h4>
          </div>
          <Footer />
        </div>

      </Router>
    </>
  );
}

export default App;

// here by link whichever component is mounted or unmounted only navbar and footer component will remain same as it is 