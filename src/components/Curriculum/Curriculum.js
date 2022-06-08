import React, { useState, useRef } from "react";
import "./Curriculum.css";
import useKeypress from "react-use-keypress";
import { useReactToPrint } from "react-to-print";
import photo from "../../assets/images/me-id.jpg";
//components
import Tagline from "./Tagline/Tagline";
import ButtonBack from "../Global/ButtonBack/ButtonBack";
import ContainerCvs from "../Global/ConatinerCvs/ContainerCvs";
import CurriculumPoint from "./CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../Global/ContainerContent/ContainerContent";
import Clause from "../Global/Clause";

function Curriculum() {
  const [key, setKey] = useState(false);
  const [skills, setSkills] = useState([
    "Prawo jazdy kat. B",
    "Umiejętność pracy w zespole",
    "Komunikatywność",
    "Kreatywność",
    "Dociekliwość i chęć rozwoju zawodowego",
    "Implementowanie responsywnych interfejsów użytkownika",
    "Znajomość HTML i CSS",
    "Znajomość frameworka REACT",
  ]);
  const [alianz, setAlianz] = useState([
    "Finalizowanie sprzedaży ubezpieczeń",
    "Budowanie długoterminowej relacji z klientem",
    "Negocjowanie warunków oraz podpisywanie umów",
    "Dopasowanie produktów do potrzeb i oczekiwań klientów",
    "Realizacja indywidualnych planów sprzedaży, aktywne pozyskiwanie klientów",
    "Przedstawianie ofert ubezpieczeniowych zgodnie z oczekiwaniami odbiorcy",
    "Kontakt z klientami",
  ]);
  const [atom, setAtom] = useState([
    "Prowadzenie dokumentacji związanej z zatrudnianiem pracowników",
    "Współpraca z US i ZUS",
    "Księgowanie faktur zakupu i kontrola obiegu dokumentów",
    "Przygotowywanie deklaracji PIT, VAT, ZUS",
  ]);
  const [agnes, setAgnes] = useState([
    "Tworzenie strony internetowej (sklepu) do obsługi klienta(HTML, CSS, JavaScript)",
    "Praca z oprogramowaniem do obsługi sklepu KQS",
    "Współpraca z US i ZUS",
    "Kontakty z klientami w celu uzgodnienia warunków umowy oraz finalizacji zamówień",
    "Pakowanie i wysyłka zamówień do klientów",
    "Przygotowywanie deklaracji PIT, VAT, ZUS",
  ]);

  useKeypress("v", () => {
    setKey(!key);
  });

  const printRefmy = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRefmy.current,
    documentTitle: "my-resume",
  });
  return (
    <div className="curriculum">
      <div className="curriculum__top">
        <ButtonBack />
      </div>
      {key ? (
        <button
          className="button__pritingtopdf"
          type="button"
          onClick={handlePrint}
        >
          Drukuj
        </button>
      ) : null}

      <ContainerCvs identifier="akprinttopdf" ref={printRefmy}>
        <Tagline
          job="Junior Front-End Developer"
          email="frontendagnes@gmail.com"
          phone="603430340"
          skills={skills}
          photo={photo}
          myCv
        />
        <ContainerContent name="inż. Agnieszka Kamińska">
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
              arr={alianz}
            />
            <CurriculumPoint
              data="2011-06 - 2012-02"
              title="Księgowa"
              content="ATOM Maria Syrek, Sokołowiec"
              arr={atom}
            />
            <CurriculumPoint
              data="2012-03 - 2021-12"
              title="Właściciel Jednoosobowa Działalność Gospodarcza"
              content="AGNES Agnieszka Kamińska (księgarnia internetowa), Wojcieszów"
              arr={agnes}
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
          <Clause />
        </ContainerContent>
      </ContainerCvs>
    </div>
  );
}

export default Curriculum;
