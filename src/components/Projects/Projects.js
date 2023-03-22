import React from "react";
import "./Projects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Project from "../Project/Project";
//images
import reactAll from "../../assets/images/react-all.webp";
import jsAll from "../../assets/images/ja-all.webp";
function Projects() {
  const [{ reactIcon, pureIcons, isEnglish }] = useStateValue();
  return (
    <div className="projects" name="my-projects">
      {!isEnglish ? <h3>Moje Projekty</h3> : <h3>My Projects</h3>}
      <div className="projects__container">
        <Project
          icons={reactIcon}
          title="Projekty React"
          img={reactAll}
          url="/projects/react"
          description={
            isEnglish
              ? "Here you will find a selection of projects made in React."
              : "W tym miejscu znajdują się wybrane projekty wykonane w React."
          }
        />
        <Project
          icons={pureIcons}
          title="Projekty HTML, CSS, JavaScript"
          img={jsAll}
          url="/projects/purejs"
          description={
            isEnglish
              ? "Here you will find a selection of projects made using HTML, CSS and pure JavaScript."
              : "W tym miejscu znajdują się wybrane projekty wykonane za pomocą HTML, CSS i czystego JavaScript."
          }
        />
      </div>
      <div className="projects__bottom">
        <a
          href="https://github.com/frontendagnes?tab=repositories"
          alt="All Projects"
        >
          <div title="Kliknięcie przeniesie Cię na stronę GitHub">
            <ArrowDownwardIcon sx={{ fontSize: 80 }} />
            <p>More..</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
