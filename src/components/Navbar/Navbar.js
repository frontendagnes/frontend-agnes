import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__icon">
        <MenuIcon sx={{ fontSize: 62 }} />
      </div>
      <ul>
        <li>Kim Jestem?</li>
        <li>W czym mogę pomóc?</li>
        <li>Moje Projekty</li>
        <li>Kontakt</li>
        <li>Moje CV</li>
        <li>Generator CV</li>
      </ul>
    </nav>
  );
}

export default Navbar;
