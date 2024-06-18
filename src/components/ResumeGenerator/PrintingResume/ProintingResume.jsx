import React, { useState, useRef } from "react";
import "./PrintingResume.css";
import { useStateValue } from "../../../assets/utility/StateProvider";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
//components
import ContainerCvs from "../../../Global/ConatinerCvs/ContainerCvs";
import TaglineV1 from "../../Curriculum/Tagline/Taglinev1";
import TaglineV2 from "../../Curriculum/Tagline/Taglinev2";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../../../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../../../Global/ContainerContent/ContainerContent";
import Clause from "../../../Global/Clause";
import OpenModal from "../../../Global/OpenModal/OpenModal";
//mui
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";

function PrintingResume() {
  const history = useNavigate();

  const [{ cvs }] = useStateValue();

  const [modalConfig, setModalConfig] = useState({
    open: false,
    text: "",
    onYes: null,
  });
  const [version, setVersion] = useState("v1");
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "my-resume",
  });

  const handleModalOpen = (text, onYes) => {
    setModalConfig({ open: true, text, onYes });
  };
  const handleModalClose = () => {
    setModalConfig({ open: false, text: "", onYes: null });
  };

  const handleWarningYes = () => {
    handleModalClose();
    modalConfig.onYes();
  };

  const taglineVersions = {
    v1: TaglineV1,
    v2: TaglineV2,
  };
  const styleConfigurations = {
    v1: {
      containerContent: {
        width: "100%",
      },
      curriculumPoint: {
        marginTop: "-25px",
        marginBottom: "-10px",
      },
    },
    v2: {
      containerCvs: {
        display: "flex",
      },
      containerContent: {
        marginTop: "-350px",
        width: "70%",
      },
      containerPrint: {
        display: "none",
      },
    },
  };
  const TaglineComponent = taglineVersions[version];
  const currentStyles = styleConfigurations[version];

  const handleVersionChange = (newVersion) => {
    setVersion(newVersion);
  };
  return (
    <div className="printingresume">
      <OpenModal
        text={modalConfig.text}
        open={modalConfig.open}
        setOpen={setModalConfig}
        handleClickNo={handleModalClose}
        handleClickYes={handleWarningYes}
      />
      <header>
        <nav>
          <Button
            onClick={() =>
              handleModalOpen(
                "Opuszczając stronę stracisz wszytkie dane! Jesteś pewien?",
                () => history("/")
              )
            }
          >
            Home Page
          </Button>
          <Button
            onClick={() =>
              handleModalOpen(
                "Opuszczając stronę stracisz wszytkie dane! Jesteś pewien?",
                () => history("/resume-generator")
              )
            }
          >
            Back to the generator
          </Button>
        </nav>
      </header>
      <div className="printingresume__buttonPrint printingresume__buttonsCnt">
        <Button type="button" onClick={handlePrint}>
          <PrintIcon />
          Drukuj
        </Button>
      </div>
      <ol className="printingresume__version-buttons printingresume__buttonsCnt">
        {Object.keys(taglineVersions).map((ver, index) => (
          <li
            key={index + 1}
            style={{
              background: version === ver ? "#d3d3d3" : "transparent",
            }}
          >
            <Button
              sx={{ fontSize: "1.1rem" }}
              key={ver}
              onClick={() => handleVersionChange(ver)}
            >
              Wersja {ver}
            </Button>
          </li>
        ))}
      </ol>
      <ContainerCvs
        identifier="printtopdf"
        ref={printRef}
        style={currentStyles.containerCvs}
      >
        <TaglineComponent
          name={cvs.name}
          job={cvs.job}
          email={cvs.email}
          phone={cvs.phone}
          skills={cvs.skills}
        />
        <ContainerContent
          style={currentStyles.containerContent}
          name={version == "v1" ? null : cvs.name}
        >
          <ContainerPrint title="Doświadczenie">
            {cvs.work?.map((item, index) => (
              <CurriculumPoint
                key={index}
                data={item.date}
                title={item.title}
                content={item.workplace}
                arr={item?.skills}
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
          {cvs.courses?.length ? (
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
          {/* {cvs.skills.length ? ( */}
            <ContainerPrint
              title="Umiejętności"
              style={currentStyles.containerPrint}
            >
              <CurriculumPoint
                arr={cvs.skills}
                style={currentStyles.curriculumPoint}
              />
            </ContainerPrint>
          {/* ) : null} */}
          <Clause />
        </ContainerContent>
      </ContainerCvs>
    </div>
  );
}

export default PrintingResume;
