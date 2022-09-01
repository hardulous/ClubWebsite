import React from "react";
import S from "./App.module.css";
import S1 from "./Components/LandingPage/Styles/Footer.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
// import AboutUsPage from "./Components/AboutUsPage/AboutUsPage.js";
// import ServicePage from "./Components/ServicePage/ServicePage.js";
import GalleryPage from "./Components/GalleryPage/GalleryPage.js";
import Footer from "./Components/LandingPage/Footer.js";
// import MenuHandler from "./Components/MenuPage.js/MenuHandler.js";
import ResModal from "./Components/Modal/ResModal";

const LazyAbout = React.lazy(()=>import(`./Components/AboutUsPage/AboutUsPage.js`))
const LazyService = React.lazy(()=>import('./Components/ServicePage/ServicePage.js'))
const LazyMenuHandler = React.lazy(()=>import('./Components/MenuPage.js/MenuHandler.js'))

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/about" element={

            <React.Suspense fallback={<ResModal/>}>
              <LazyAbout/>
            </React.Suspense>

          } />
          <Route path="/service" element={

             <React.Suspense fallback={<ResModal/>}>
              <LazyService/>
            </React.Suspense>

          } />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/menu/:category/:class/" element={

            <React.Suspense fallback={<ResModal/>}>
              <LazyMenuHandler/>
            </React.Suspense>

          }/>
          <Route path="/menu/:category/:class/:subClass" element={

            <React.Suspense fallback={<ResModal/>}>
              <LazyMenuHandler/>
            </React.Suspense>

          }/>
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