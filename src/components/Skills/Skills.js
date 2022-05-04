import React from "react";
import "./Skills.css";
import Skill from "../Skill/Skill";
import { useStateValue } from "../../assets/utility/StateProvider";
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
              ? "Responsive web design, the website adapts to the screen resolution, which nowadays is essential"
              : "Responsive web design, strona dopasowuje się do rozdzielczości ekranu co w dzisiejszych czasach jest podstawą"
          }
        />
        <Skill
          title="JavaScript/ React"
          content={
            isEnglish
              ? "Pages don't have to be boring, with these tools you can add interactivity to them"
              : "Przy pomocy javascript i react można dodać do stron trochę interakcji z użytkowanikiem dzięki czemu apliakcje webowe są atrakcyjniejsze"
          }
        />
      </div>
    </div>
  );
}

export default Skills;
