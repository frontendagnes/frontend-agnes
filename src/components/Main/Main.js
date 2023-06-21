import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Information from "../../Administrator/Information/Information";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

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
