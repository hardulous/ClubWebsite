import React from "react";
import S from './App.module.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from "./Components/LandingPage/Navbar.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage.js";
import ServicePage from "./Components/ServicePage/ServicePage.js";
import GalleryPage from "./Components/GalleryPage/GalleryPage.js";

function App() {
  return (
    
    <>
    
     <Router>

       <Navbar/>

       <Routes>

        <Route path="/" index element={<LandingPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />

       </Routes>

     </Router>
    
    </>

  );
}

export default App;
