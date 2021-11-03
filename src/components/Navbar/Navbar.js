import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
function Navbar() {
  const matches = useMediaQuery("(max-width: 850px)");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (matches) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [matches]);

  const style = {
    visible: {
      visibility: "visible",
      transform: `scaleX(${1})`,
    },
    hidden: {
      visibility: "hidden",
      transform: `scaleX(${0})`,
    },
  };
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    if (matches){
      setIsVisible(false)
    }
  }
  return (
    <nav className="navbar" >
      <div className="navbar__icon" onClick={matches ? handleClick : undefined}>
        <MenuIcon sx={{ fontSize: 52 }} />
      </div>
      <ul
        className="navbar__list"
        style={!isVisible ? style.hidden : style.visible}
      >
        <li onClick={closeMenu}>
          <a href="#aboutme">Kim Jestem?</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#information">W czym mogę pomóc?</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#my-projects">Moje Projekty</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact-me">Kontakt</a>
        </li>
        <li>
          <Link to="/curriculum">Moje CV</Link>
        </li>
        <li>Generator CV</li>
      </ul>
    </nav>
  );
}

export default Navbar;
