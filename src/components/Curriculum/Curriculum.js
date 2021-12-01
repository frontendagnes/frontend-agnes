import React, { useState } from "react";
import "./Curriculum.css";
import Tagline from "./Tagline/Tagline";
import CurriculumContent from "./CurriculumContent/CurriculumContent";
import ButtonBack from "../Global/ButtonBack/ButtonBack";
import photo from "../../assets/images/me.jpg"
function Curriculum() {
  const [skills, setSkills] = useState(["Prawo jazdy kat. B", "Umiejętnośc pracy w zespole", "Komunikatywność", "Kreatywność", "Dociekliwość i chęć rozwoju zawodowego", "Implementowanie responsywnych interfejsów uzytkownika", "Znajomoąść HTML i CSS", "Znajomoąść frameworka REACT"])
  return (
    <div className="curriculum">
      <div className="curriculum__top">
        <ButtonBack />
      </div>
      <div className="curriuculum__bottom">
        <Tagline
          name="Agnieszka Kamińska"
          job="Junior Front-End Developer"
          email="zabula81@o2.pl"
          phone="603430340"
          skills={skills}
          photo={photo}
        />
        <CurriculumContent />
      </div>
    </div>
  );
}

export default Curriculum;
