import React, { useState, useEffect } from "react";
import "./GeneratorContent.css";
import AddForm from "../AddForm/AddForm";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import { index } from "../../../assets/utility/functions";
function GeneratorContent() {
  const [isEdit, setIsEdit] = useState(false);
  
  const [point, setPoint] = useState([]);
  const [education, setEducation] = useState([]);
  const [courses, setCourses] = useState([]);


  return (
    <div className="generatorcontent">
      <div className="generatorcontent__tabs">
              <AddForm 
                  point={point}
                  setPoint={setPoint}
                  name="Zawód"
                  helperName="Wprowadź nazwę zawodu"
                  place="Miejsce pracy"
                  helperPlace="Wprowadź miejsce pracy"
      />
      </div>

      <div className="generatorcontent__title">Doświadczenie</div>
      <div className="generatorcontent__content">
        <div>
          {point?.map((item) => (
            <CurriculumPoint
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
            />
          ))}
        </div>
      </div>
      <div className="generatorcontent__title">Wykształcenie</div>
      <div className="generatorcontent__content">
        <div>
          {education?.map((item) => (
            <CurriculumPoint
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
            />
          ))}
        </div>
      </div>
      <div className="generatorcontent__title">Kursy</div>
      <div className="generatorcontent__content">
        <div>
          {courses?.map((item) => (
            <CurriculumPoint
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
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
