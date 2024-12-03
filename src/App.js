import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/ Skills";
import Footer from "./Component/Footer";
import"/home/uki-jaffna/Documents/my-portfolio/src/index.css"
import Contactus from "./Component/Contactus";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact"element={<Contactus/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
