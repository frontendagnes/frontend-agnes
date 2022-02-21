import React, { useState } from "react";
import "./Curriculum.css";
import Tagline from "./Tagline/Tagline";
import ButtonBack from "../Global/ButtonBack/ButtonBack";
import photo from "../../assets/images/me.jpg";
import ContainerCvs from "../Global/ConatinerCvs/ContainerCvs";
import CurriculumPoint from "./CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../Global/ContainerContent/ContainerContent";
import Clause from "../Global/Clause";
function Curriculum() {
  const [skills, setSkills] = useState([
    "Prawo jazdy kat. B",
    "Umiejętnośc pracy w zespole",
    "Komunikatywność",
    "Kreatywność",
    "Dociekliwość i chęć rozwoju zawodowego",
    "Implementowanie responsywnych interfejsów uzytkownika",
    "Znajomoąść HTML i CSS",
    "Znajomoąść frameworka REACT",
  ]);
  const [alianz, setAlianz] = useState([
    "Finalizowanie sprzedaży ubezpieczeń",
    "Budowanie długoterminowej relacji z klientem",
    "Negocjowanie warunków oraz podpisywanie umów",
    "Dopasowanie produktów do potrzeb i oczekiwań klientów",
    "Realizacja indywidualnych planów sprzedaży, aktywne pozyskiwanie klientów",
    "Przedstawianie ofert ubezpieczeniowych zgodnie z oczekiwaniami odbiorcy",
    "Kontaktowanie się z klientami",
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
    "Pakowanie i wysyłka zamówień do kilentów",
    "Przygotowywanie deklaracji PIT, VAT, ZUS",
  ]);
  return (
    <div className="curriculum">
      <div className="curriculum__top">
        <ButtonBack />
      </div>
      <ContainerCvs>
        <Tagline
          job="Junior Front-End Developer"
          email="zabula81@o2.pl"
          phone="603430340"
          skills={skills}
          photo={photo}
        />
        <ContainerContent name="Agnieszka Kamińska">
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
              content="Ośrodek Doskonalenia Zawodowego DZDZ w Złotoryji"
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
            />
          </ContainerPrint>
          <Clause />
        </ContainerContent>
      </ContainerCvs>
    </div>
  );
}

export default Curriculum;
