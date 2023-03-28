import React from "react";
import Navbar from "./components/Navbar/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css"
import { Banner } from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./Assets/main.css";
// Pictures
function App() {


  return (
    <div>
      <Navbar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
