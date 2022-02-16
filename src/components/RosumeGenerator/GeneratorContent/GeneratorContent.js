import React from "react";
import "./GeneratorContent.css";
import { index } from "../../../assets/utility/functions";
import { Link } from "react-router-dom";
//components
import AddForm from "../AddForm/AddForm";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import TabGenerator from "../../Global/TabGenerator/TabGenerator";
import GeneratorSidebar from "../GeneratorSidebar/GeneratorSidebar";

function GeneratorContent({
  point,
  setPoint,
  education,
  setEducation,
  courses,
  setCourses,
  skill,
  setSkill,
  setSkills,
  skills,
  name,
  setName,
  job,
  setJob,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="generatorcontent">
      <div className="generatorcontent__tabs">
        <div className="generatorcontent__description">
          Generator nie wysyła i nie zapisuje żadnych danych dlatego po
          odświerzeniu strony wszystkie informację znikają i trzeba je wpisywać
          od nowa. Proszę o uważne korzystanie z aplikacji żeby nie stracić
          wprowadzonych danych
        </div>
        <h4>
          Wypełnij formularze i wybierz przycisk Zatwierdź.
          <div title="Przykładowe CV">
            <Link to="/resume-agnieszka.kaminska">
              Przykład wypełnionego CV(zalecane otwarcie w nowej karcie)
            </Link>
          </div>
        </h4>
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
          component3={
            <GeneratorSidebar
              skill={skill}
              setSkill={setSkill}
              setSkills={setSkills}
              skills={skills}
              name={name}
              setName={setName}
              job={job}
              setJob={setJob}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />
          }
        />
      </div>
      <div className="generatorcontent__title">Doświadczenie</div>
      <div className="generatorcontent__content">
        <div>
          {point?.map((item, i) => (
            <CurriculumPoint
              key={index()}
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
              point={point}
              setPoint={setPoint}
              id={i}
              isRemove
            />
          ))}
        </div>
      </div>
      <div className="generatorcontent__title">Wykształcenie</div>
      <div className="generatorcontent__content">
        <div>
          {education?.map((item, i) => (
            <CurriculumPoint
              key={index()}
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
              point={education}
              setPoint={setEducation}
              id={i}
              isRemove
            />
          ))}
        </div>
      </div>
      {courses.length ? (
        <div className="generatorcontent__title">Kursy</div>
      ) : null}
      <div className="generatorcontent__content">
        <div>
          {courses?.map((item, i) => (
            <CurriculumPoint
              key={index()}
              data={item.date}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
              point={courses}
              setPoint={setCourses}
              id={i}
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
