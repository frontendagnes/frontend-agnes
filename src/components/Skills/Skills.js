import React from "react";
import "./Skills.css";
import Skill from "../Skill/Skill";
import { useStateValue } from "../../assets/utility/StateProvider";
import { Link } from "react-router-dom";
function Skills() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div className="skills" name="information">
      <h3>{!isEnglish ? "W czym mogę pomóc?" : "How I can help?"} </h3>
      <div className="skills__container">
        <Skill
          title="HTML, CSS"
          content={
            isEnglish
              ? "HTML and CSS page programming"
              : "Programuje strony z wykorzystaniem HTML i CSS"
          }
        />
        <Skill
          title="RWD"
          content={
            isEnglish
              ? "Responsive web design, the website adapts to the screen resolution, which nowadays is must have"
              : "Responsive web design, strona dopasowuje się do rozdzielczości ekranu co w dzisiejszych czasach jest 'must have'"
          }
        />
        <Skill
          title="JavaScript/React"
          content={
            isEnglish
              ? "With javascript and react you can add user interaction to your website, making your web applications more attractive"
              : "Przy pomocy javascript i react można dodać do strony interakcję z użytkowanikiem dzięki czemu apliakcje webowe są atrakcyjniejsze"
          }
        />
      </div>
      <div className="skills__link">
        <Link to="/questionare">🅲🅾 🅸🅻🅴 🅸 🆉🅰 🅸🅻🅴❓ 🙂</Link>
      </div>
    </div>
  );
}

export default Skills;
