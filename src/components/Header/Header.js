import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__container">
          <h1>
            <span>Junior</span>Front-End Developer
          </h1>
          <div className="header__skills" title="html5">
            <div className="header__skillOne">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="header__skillTwo" title="css3">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="header__skillThree" title="javascript">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="header__skillFour" title="react">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="header__skillFive" title="github">
              <FontAwesomeIcon icon={faGithubSquare} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
