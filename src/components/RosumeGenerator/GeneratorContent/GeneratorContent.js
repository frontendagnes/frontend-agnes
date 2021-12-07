import React, { useState, useEffect } from "react";
import "./GeneratorContent.css";
import { index } from "../../../assets/utility/functions";

//components
import AddForm from "../AddForm/AddForm";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import TabGenerator from "../../TabGenerator/TabGenerator";

function GeneratorContent() {
  const [isEdit, setIsEdit] = useState(false);

  const [point, setPoint] = useState([]);
  const [education, setEducation] = useState([]);
  const [courses, setCourses] = useState([]);

  return (
    <div className="generatorcontent">
      <div className="generatorcontent__tabs">
        <TabGenerator
          component={
            <AddForm
              point={point}
              setPoint={setPoint}
              name="Zawód"
              helperName="Wprowadź nazwę zawodu"
              place="Miejsce pracy"
              helperPlace="Wprowadź miejsce pracy"
            />
          }
          component1={
            <AddForm
              point={education}
              setPoint={setEducation}
              name="Wykrztałcenie"
              helperName="Wprowadź wykrztałcenie"
              place="Szkoła"
              helperPlace="Wprowadź nazwę szkoły"
            />
          }
          component2={
            <AddForm
              point={courses}
              setPoint={setCourses}
              name="Kurs"
              helperName="Wprowadź Kurs"
              place="Miejsce odbycia"
              helperPlace="Wprowadź gdzie odbyłeś kurs"
            />
          }
        />
      </div>

      <div className="generatorcontent__title">Doświadczenie</div>
      <div className="generatorcontent__content">
        <div>
          {point?.map((item) => (
            <CurriculumPoint
              key={index()}
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
              isRemove
            />
          ))}
        </div>
      </div>
      <div className="generatorcontent__title">Wykształcenie</div>
      <div className="generatorcontent__content">
        <div>
          {education?.map((item) => (
            <CurriculumPoint
              key={index()}
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
              isRemove
            />
          ))}
        </div>
      </div>
      {courses.length ? <div className="generatorcontent__title">Kursy</div> : null}
      <div className="generatorcontent__content">
        <div>
          {courses?.map((item) => (
            <CurriculumPoint
              key={index()}
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
              isRemove
            />
          ))}
        </div>
      </div>
      <div className="generatorcontent__clause">
        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia
        rekrutacji.
      </div>
    </div>
  );
}

export default GeneratorContent;
