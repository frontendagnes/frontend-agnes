import React from "react";
import "./Projects.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Projects() {
  return (
    <div className="projects" id="my-projects">
      <h3>Moje Projekty</h3>
      <div className="projects__container"></div>
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
