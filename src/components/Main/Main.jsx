import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.jsx";
import Information from "../../Administrator/Information/Information.jsx";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import Footer from "../Footer/Footer.jsx";

function Main() {
  return (
    <main className="main" id="main__container">
      <Navbar />
      <div className="main__container">
        <Home />
        <div className="main__middle">
          <Information />
          <Skills />
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Main;
