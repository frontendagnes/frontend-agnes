import React, { useEffect } from "react";
import "./PrintingResume.css";
import ContainerCvs from "../../Global/ConatinerCvs/ContainerCvs";
import Tagline from "../../Curriculum/Tagline/Tagline";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../../Global/ContainerContent/ContainerContent";
import Clause from "../../Global/Clause";
import { useStateValue } from "../../../assets/utility/StateProvider";
import ReactToPrint from "react-to-print";
import { generatePDF } from "../../../assets/utility/functions";
import Modal from "@mui/material/Modal";
import { useState } from "react";
function ProintingResume() {
  const [{ cvs }, dispatch] = useStateValue();
  const [open, setOpen] = useState(true);
  const handleClickYes = () => {
    dispatch({ type: "PHOTO_YES" });
    setOpen(false);
  };
  const handleClickNo = () => {
    dispatch({ type: "PHOTO_NO" });
    setOpen(false);
  };
  return (
    <div className="printingresume">
      <Modal open={open}>
        <div className="modal">
          <div className="modal__wrapper">
            <div>Chcesz dodać zdjęcie do swojego CV?</div>
            <div className="modal__buttons">
              <button type="button" onClick={handleClickYes}>
                Tak
              </button>
              <button type="button" onClick={handleClickNo}>
                Nie
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <button className="button__pritingtopdf" type="button" onClick={() => generatePDF("printtopdf")}>
        Drukuj do PDF
      </button>
      <ContainerCvs identifier="printtopdf">
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
          {cvs.courses ? (
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

export default ProintingResume;
