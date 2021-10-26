import React from "react";
import "./Projects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import shop from "../../assets/images/shop.webp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import reactAll from "../../assets/images/react-all.webp";

import Project from "../Project/Project";
function Projects() {
  const [{ reactIcon, pureIcons }] = useStateValue();
  return (
    <div className="projects" id="my-projects">
      <h3>Moje Projekty</h3>
      <div className="projects__container">
        <Project
          icons={reactIcon}
          title="Projekty React"
          img={reactAll}
          url="/projects/react"
          description="W tym miejscu znajdują się wybrane projekty wykonane w React."
        />
        <Project
          icons={pureIcons}
          title="Projekty JS, HTML, CSS"
          img={shop}
          url="/projects/purejs"
          description="W tym miejscu znajdują się wybrane projekty wykonane za pomocą HTML, CSS i czystego JavaScript."
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
