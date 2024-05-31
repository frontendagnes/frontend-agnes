import React, { useState, useRef } from "react";
import "./Curriculum.css";
import useKeypress from "react-use-keypress";
import { useReactToPrint } from "react-to-print";

import photo from "../../assets/images/me-id.jpg";
//mui
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";

//components
import Tagline from "./Tagline/Taglinev1.jsx";
import ButtonBack from "../../Global/ButtonBack/ButtonBack";
import ContainerCvs from "../../Global/ConatinerCvs/ContainerCvs";
import CurriculumPoint from "./CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../../Global/ContainerContent/ContainerContent";
import Clause from "../../Global/Clause";
//data
import { arr } from "./mySkills";

function Curriculum() {
  const [key, setKey] = useState(false);

  useKeypress("v", () => {
    setKey(!key);
  });

  const printRefmy = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRefmy.current,
    documentTitle: "Agnieszka Kamińska",
  });

  return (
    <div className="curriculum">
      <div className="curriculum__top">
        <ButtonBack />
      </div>
      {key ? (
        <div className="curriculum__print" onClick={handlePrint}>
          <Button>Drukuj</Button>
          <PrintIcon />
        </div>
      ) : null}
      <ContainerCvs identifier="akprinttopdf" ref={printRefmy}>
        <Tagline
          job="Junior Frontend Developer"
          email="frontendagnes@gmail.com"
          phone="603430340"
          skills={arr.skills}
          photo={photo}
          name={arr.name}
          myCv
        />
        <ContainerContent>
          <ContainerPrint title="Doświadczenie">
            <CurriculumPoint
              data="2008-03 - 2008-06"
              title="Technik informatyk - staż"
              content="Zakład Wapienniczy Wojcieszów sp. z o.o."
            />
            <CurriculumPoint
              data="2008-11 - 2010-03"
              title="Agent Ubezpieczeniowy Allianz"
              content="AK Agnieszka Kamińska, Wojcieszów (Agencja AWA s.c. Jelenia Góra)"
              arr={arr.alianz}
            />
            <CurriculumPoint
              data="2011-06 - 2012-02"
              title="Księgowa"
              content="ATOM Maria Syrek, Sokołowiec"
              arr={arr.atom}
            />
            <CurriculumPoint
              data="2012-03 - 2021-12"
              title="Właściciel Jednoosobowa Działalność Gospodarcza"
              content="AGNES Agnieszka Kamińska (księgarnia internetowa), Wojcieszów"
              arr={arr.agnes}
            />
          </ContainerPrint>
          <ContainerPrint title="Wykrztałcenie">
            <CurriculumPoint
              data="1996-09 - 2000-06"
              title="Liceum Handlowe, technik handlowiec"
              content="Zespół Szkół Zawodowych w Złotoryji"
            />
            <CurriculumPoint
              data="2001-09 - 2003-06"
              title="Policealne Studium Informatyki, technik informatyk"
              content="Ośrodek Doskonalenia Zawodowego DZDZ w Złotoryi"
            />
            <CurriculumPoint
              data="2003-10 - 2007-03"
              title="Informatyka w szkole, inżynier informatyk"
              content="Państwowa Wyższa Szkoła Zawodowa. Kolegium Karkonoskie w Jeleniej Górze"
            />
          </ContainerPrint>
          <ContainerPrint title="Kursy">
            <CurriculumPoint
              data="2008-09 - 2008-11"
              title="Asystent ds. kadrowo płacowych + obsługa programu Płatnik"
              content="Dolnośląski Zakład Doskonalenia Zawodowego Oddział I we Wrocławiu"
            />
          </ContainerPrint>
          {arr.skills.length ? (
            <ContainerPrint title="Umiejętności">
              <CurriculumPoint arr={arr.skills} />
            </ContainerPrint>
          ) : null}

          <Clause />
        </ContainerContent>
      </ContainerCvs>
    </div>
  );
}

export default Curriculum;
