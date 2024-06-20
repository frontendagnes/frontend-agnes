import React from "react";
import "./Skills.css";
import { useStateValue } from "../../assets/utility/StateProvider";

//components
import Skill from "../Skill/Skill";
import Title from "../../Global/Title/Title";
import Information from "../Information/Information";
function Skills() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div className="skills" name="information">
      <Title polish="W czym mogę pomóc" english="How i can help" />
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
      <Information />
    </div>
  );
}

export default Skills;
