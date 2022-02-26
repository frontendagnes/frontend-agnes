import React, { useState, useEffect } from "react";
import "./Navbar.css";
//mui
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import { style } from "../Global/style";
import { useStateValue } from "../../assets/utility/StateProvider";

function Navbar() {
  const matches = useMediaQuery("(max-width: 850px)");
  const matchesHeight = useMediaQuery("(max-height: 690px)");
  const [{ isEnglish }] = useStateValue();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (matches || matchesHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [matches, matchesHeight]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    if (matches || matchesHeight) {
      setIsVisible(false);
    }
  };
  return (
    <nav className="navbar">
      <div
        className="navbar__icon"
        onClick={matches || matchesHeight ? handleClick : undefined}
      >
        <MenuIcon
          sx={{
            fontSize: 52,
          }}
        />
      </div>
      {!isEnglish ? (
        <ul
          className="navbar__list"
          style={!isVisible ? style.hidden : style.visible}
        >
          <li onClick={closeMenu}>
            <a href="#aboutme"> Kim Jestem ? </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#information"> W czym mogę pomóc ? </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#my-projects"> Moje Projekty </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact-me"> Kontakt </a>
          </li>
          <li>
            <Link to="/resume-agnieszka.kaminska"> Moje CV </Link>
          </li>
          <li>
            <Link to="/resume-generator"> Generator CV </Link>
          </li>
        </ul>
      ) : (
        <ul
          className="navbar__list"
          style={!isVisible ? style.hidden : style.visible}
        >
          <li onClick={closeMenu}>
            <a href="#aboutme"> Who I am ? </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#information"> How I can help ? </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#my-projects"> My Projects </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact-me"> Contact </a>
          </li>
          <li>
            <Link to="/resume-agnieszka.kaminska"> My resume </Link>
          </li>
          <li>
            <Link to="/resume-generator"> Resume generator </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
