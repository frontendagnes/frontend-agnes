import React, { useState, useRef } from "react";
import "./PrintingResume.css";
import { useStateValue } from "../../../assets/utility/StateProvider";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
//components
import ContainerCvs from "../../Global/ConatinerCvs/ContainerCvs";
import Tagline from "../../Curriculum/Tagline/Tagline";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../../Global/ContainerContent/ContainerContent";
import Clause from "../../Global/Clause";
import OpenModal from "../../Global/OpenModal/OpenModal";
import ButtonBack from "../../Global/ButtonBack/ButtonBack";

function PrintingResume() {
  const history = useNavigate();

  const [{ cvs } ] = useStateValue();

  const [openWarring, setOpenWarrning] = useState(false);

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "my-resume",
  });



  const warriningNo = () => {
    setOpenWarrning(false);
  };

  const warrnigYes = () => {
    setOpenWarrning(false);
    history("/resume-generator");
  };

  const backButton = () => {
    setOpenWarrning(true);
  };
  return (
    <div className="printingresume">
      <OpenModal
        text="Opuszczając stronę stracisz wszytkie dane! Jesteś pewien?"
        open={openWarring}
        setOpen={setOpenWarrning}
        handleClickNo={warriningNo}
        handleClickYes={warrnigYes}
      />
      <ButtonBack
        title="Uwaga Klikając ten przycisk stracisz wszystkie dane"
        openModal={true}
      />
      <button className="printingresume__backButton" onClick={backButton}>
        Back to the generator
      </button>

      <button
        className="button__pritingtopdf"
        type="button"
        onClick={handlePrint}
      >
        Drukuj
      </button>

      <ContainerCvs identifier="printtopdf" ref={printRef}>
        <Tagline
          name={cvs.name}
          job={cvs.job}
          email={cvs.email}
          phone={cvs.phone}
          skills={cvs.skills}
        />
        <ContainerContent name={cvs.name}>
          <ContainerPrint title="Doświadczenie">
            {cvs.work?.map((item, index) => (
              <CurriculumPoint
                key={index}
                data={item.date}
                title={item.title}
                content={item.workplace}
                arr={item.skills}
              />
            ))}
          </ContainerPrint>
          <ContainerPrint title="Wykrztałcenie">
            {cvs.education?.map((item, index) => (
              <CurriculumPoint
                key={index}
                data={item.date}
                title={item.title}
                content={item.workplace}
                arr={item.skills}
              />
            ))}
          </ContainerPrint>
          {cvs.courses.length > 0 ? (
            <ContainerPrint title="Kursy">
              {cvs.courses?.map((item, index) => (
                <CurriculumPoint
                  key={index}
                  data={item.date}
                  title={item.title}
                  content={item.workplace}
                  arr={item.skills}
                />
              ))}
            </ContainerPrint>
          ) : null}
          <Clause />
        </ContainerContent>
      </ContainerCvs>
    </div>
  );
}

export default PrintingResume;
