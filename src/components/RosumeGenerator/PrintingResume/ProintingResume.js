import React, { useEffect } from "react";
import "./PrintingResume.css";
import ContainerCvs from "../../Global/ConatinerCvs/ContainerCvs";
import Tagline from "../../Curriculum/Tagline/Tagline";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import ContainerPrint from "../../Global/ContainerPrint/ContainerPrint";
import ContainerContent from "../../Global/ContainerContent/ContainerContent";
import Clause from "../../Global/Clause";
import { useStateValue } from "../../../assets/utility/StateProvider";

function ProintingResume() {
  const [{ cvs }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(cvs);
  }, [cvs]);
  return (
    <div className="printingrosume">
      <ContainerCvs>
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
