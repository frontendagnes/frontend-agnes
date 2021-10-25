import React, { useState } from "react";
import "./Projects.css";

import shop from '../../assets/images/shop.webp'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Project from "../../Project/Project";
function Projects() {
  const [react, setReact] = useState([<FontAwesomeIcon icon={faReact} />]);
  const [pure, setPure] = useState([<FontAwesomeIcon icon={faHtml5} />, <FontAwesomeIcon icon={faCss3Alt} />, <FontAwesomeIcon icon={faJsSquare} />])

  return (
    <div className="projects" id="my-projects">
      <h3>Moje Projekty</h3>
      <div className="projects__container">
        <Project 
        icons={react} 
        title="Projekty React"
        />
        <Project 
        icons={pure} 
        title="Projekty JS, HTML, CSS"
        img={shop}
        />
      </div>
      <div className="projects__bottom">
        <a
          href="https://github.com/zabula81?tab=repositories"
          alt="All Projects"
        >
          <div>
            <ArrowDownwardIcon sx={{ fontSize: 80 }} />
            <p>More..</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
