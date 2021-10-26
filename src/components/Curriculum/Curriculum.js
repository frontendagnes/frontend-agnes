import React from "react";
import "./Curriculum.css";
import Tagline from "./Tagline/Tagline";
import CurriculumContent from "./CurriculumContent/CurriculumContent";
import ButtonBack from "../ButtonBack/ButtonBack";
function Curriculum() {
  return (
    <div className="curriculum">
      <div className="curriculum__top">
        <ButtonBack />
      </div>
      <div className="curriuculum__bottom">
        <Tagline />
        <CurriculumContent />
      </div>
    </div>
  );
}

export default Curriculum;
