import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__icon">
        <MenuIcon sx={{ fontSize: 62 }} />
      </div>
      <ul>
        <li><a href="#aboutme">Kim Jestem?</a></li>
        <li><a href="#information">W czym mogę pomóc?</a></li>
        <li><a href="#my-projects">Moje Projekty</a></li>
        <li><a href="#contact-me">Kontakt</a></li>
        <li><Link to="/curriculum">Moje CV</Link></li>
        <li>Generator CV</li>
      </ul>
    </nav>
  );
}

export default Navbar;
