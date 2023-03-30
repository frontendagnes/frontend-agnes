import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll, scrollSpy } from "react-scroll";
import { style } from "../Global/style";
import { useStateValue } from "../../assets/utility/StateProvider";
import styled from "styled-components";
//mui
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/images/logo-white-cut.webp";
const menuItems = [
  {
    id: 1,
    polish: "Kim Jestem?",
    english: "Who I am",
    href: "aboutme",
    isMain: true,
  },
  {
    id: 2,
    polish: "W czym mogę pomóc?",
    english: "How I can help?",
    href: "information",
    isMain: true,
  },
  {
    id: 3,
    polish: "Moje Projekty",
    english: "My projects",
    href: "my-projects",
    isMain: true,
  },
  {
    id: 4,
    polish: "Kontakt",
    english: "Contact",
    href: "contact",
    isMain: true,
  },
  {
    id: 5,
    polish: "Moje CV",
    english: "My CV",
    href: "/resume-agnieszka.kaminska",
    isMain: false,
  },
  {
    id: 6,
    polish: "Generator CV",
    english: "Resume Generator",
    href: "/resume-generator",
    isMain: false,
  },
];
const NavLink = styled(LinkScroll)`
  background: #3f4d70;
  &.active {
    background: #1f2136;
  }
`;
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
              <NavLink
                onClick={closeMenu}
                className="navbar__link"
                spy={true}
                smooth={true}
                duration={200}
                offset={-120}
                exact="true"
                to={item.href}
              >
                {!isEnglish ? item.polish : item.english}
              </NavLink>
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
