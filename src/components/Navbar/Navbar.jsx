import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll, scrollSpy } from "react-scroll";
import { style } from "../../Global/style";
import { useStateValue } from "../../assets/utility/StateProvider";
//mui
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/images/logo-white-cut.webp";
//data
import { menuItems } from "./menuItems";
import Information from "../Information/Information";

const styles = {
  div:{
    marginBottom: "20px"
  }
}

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

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <nav className="navbar" style={{ height: isVisible ? "100%" : "0px" }}>
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
      <ul
        className="navbar__list"
        style={!isVisible ? style.hidden : style.visible}
      >
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.isMain ? (
              <LinkScroll
                onClick={closeMenu}
                className="navbar__link"
                activeClass="navabar__activeLink"
                spy={true}
                smooth={true}
                duration={200}
                offset={-120}
                exact="true"
                to={item.href}
              >
                {!isEnglish ? item.polish : item.english}
              </LinkScroll>
            ) : (
              <LinkRouter
                to={item.href}
                className="navbar__link"
                onClick={closeMenu}
              >
                {!isEnglish ? item.polish : item.english}
              </LinkRouter>
            )}
          </li>
        ))}
        {/* <li className="navbar__information">
          <Information style={styles}/>
        </li> */}
        <li className="navbar__link navbar__lastLink">
          {matches || matchesHeight ? null : (
            <img src={logo} alt="logo" loading="lazy" />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
