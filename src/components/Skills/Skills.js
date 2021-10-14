import React from "react";
import "./Skills.css";
import Skill from "../Skill/Skill";
function Skills() {
  return (
    <div className="skills" id="information">
      <h3>W czym mogę pomóc</h3>
      <div className="skills__container">
        <Skill
          title="Html, Css"
          content="Programownie stron w języku HTML i CSS"
        />
        <Skill
          title="RWD"
          content="Responsive web design, strona dopasowuje się do rozdzielczości ekranu co w dzisiejszych czasach to już podstawa"
        />
        <Skill
          title="JavaScript/React"
          content="Programowanie może być zabawne za pomocą tych narzędzi można dodać na stronę interaktywność"
        />
      </div>
    </div>
  );
}

export default Skills;
