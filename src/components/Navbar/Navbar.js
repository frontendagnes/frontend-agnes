import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { style } from "../Global/style";
import { useStateValue } from "../../assets/utility/StateProvider";
function Navbar() {
  const matches = useMediaQuery("(max-width: 850px)");
  const [{ isEnglish, user }] = useStateValue();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (matches) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [matches]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    if (matches) {
      setIsVisible(false);
    }
  };
  return (
    <nav className="navbar" style={isVisible ? style.height100 : style.height0}>
      <div className="navbar__icon" onClick={matches ? handleClick : undefined}>
        <MenuIcon sx={{ fontSize: 52 }} />
      </div>
      {!isEnglish ? (
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
            <Link to="/resume-agnieszka.kaminska">Moje CV</Link>
          </li>
          <li>
            {user ? (
              <Link to="/resume-generator">Generator CV</Link>
            ) : (
              <Link to="/login">Generator CV</Link>
            )}
          </li>
        </ul>
      ) : (
        <ul
          className="navbar__list"
          style={!isVisible ? style.hidden : style.visible}
        >
          <li onClick={closeMenu}>
            <a href="#aboutme">Who I am?</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#information">How I can help?</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#my-projects">My Projects</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact-me">Contact</a>
          </li>
          <li>
            <Link to="/resume-agnieszka.kaminska">My resume</Link>
          </li>
          <li>
            {user ? (
              <Link to="/resume-generator">Resume generator</Link>
            ) : (
              <Link to="/login">Resume generator</Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
