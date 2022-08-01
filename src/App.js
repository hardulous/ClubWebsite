import React from "react";
import S from './App.module.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import HeaderBody from "./Components/HeaderBody";

function App() {
  return (
    
    <>
    
     <Router>

       <Navbar/>

       <Routes>

        <Route path="/" element={<HeaderBody/>} />

       </Routes>

     </Router>
    
    </>

  );
}

export default App;
