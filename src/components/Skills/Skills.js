import React from "react";
import "./Skills.css";
import Skill from "../Skill/Skill";
import { useStateValue } from "../../assets/utility/StateProvider";
function Skills() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div className="skills" id="information">
      {!isEnglish ? <h3>W czym mogę pomóc?</h3> : <h3>How I can help?</h3>}
      {!isEnglish ? (
        <div className="skills__container">
          <Skill
            title="HTML, CSS"
            content="Programownie stron w języku HTML i CSS"
          />
          <Skill
            title="RWD"
            content="Responsive web design, strona dopasowuje się do rozdzielczości ekranu co w dzisiejszych czasach jest podstawą"
          />
          <Skill
            title="JavaScript/React"
            content="Strony nie muszą być nudne, za pomocą tych narzędzi można dodać do nich interaktywność"
          />
        </div>
      ) : (
        <div className="skills__container">
          <Skill
            title="HTML, CSS"
            content="HTML and CSS page programming"
          />
          <Skill
            title="RWD"
            content="Responsive web design, the website adapts to the screen resolution, which nowadays is essential"
          />
          <Skill
            title="JavaScript/React"
            content="Pages don't have to be boring, with these tools you can add interactivity to them"
          />
        </div>
      )}
    </div>
  );
}

export default Skills;
