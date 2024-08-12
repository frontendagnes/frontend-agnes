import React from "react";
import "./GeneratorContent.css";
import { index } from "../../../assets/utility/functions";
//components
import AddForm from "../AddForm/AddForm";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import TabGenerator from "../../../Global/TabGenerator/TabGenerator";
import GeneratorSidebar from "../GeneratorSidebar/GeneratorSidebar";
import ContentDescryption from "./ContentDescryption";

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
  const tabs = [
    {
      label: "Doświadczenie",
      component: (
        <AddForm
          point={point}
          setPoint={setPoint}
          name="Zawód"
          helperName="Wprowadź nazwę zawodu (wymagane)"
          place="Miejsce pracy"
          helperPlace="Wprowadź miejsce pracy (wymagane)"
          placeholderName="np. Księgowa"
          placeholdePlace="Nazwa Firmy"
          placeholdSkill="np. prowadzenie dokumentacji księgowej"
        />
      ),
    },
    {
      label: "Wykształcenie",
      component: (
        <AddForm
          point={education}
          setPoint={setEducation}
          name="Wykrztałcenie"
          helperName="Wprowadź wykrztałcenie (wymagane)"
          place="Szkoła"
          helperPlace="Wprowadź nazwę szkoły (wymagane)"
          placeholderName="np. Liceum Ekonomiczne, technik ekonomista"
          placeholdePlace="Nazwa Szkoły"
          placeholdSkill="np. prowadzenie dokumentacji księgowej"
        />
      ),
    },
    {
      label: "Kursy",
      component: (
        <AddForm
          point={courses}
          setPoint={setCourses}
          name="Kurs"
          helperName="Wprowadź Kurs"
          place="Miejsce odbycia"
          helperPlace="Wprowadź gdzie odbyłeś kurs"
          placeholderName="np. Asystent ds. kadrowo płacowych"
          placeholdePlace="np. Ośrodek Doskonalenia Zawodowego"
          placeholdSkill="np. prowadzenie dokumentacji księgowej"
        />
      ),
    },
    {
      label: "Dane Osobowe",
      component: (
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
      ),
    },
  ];
  return (
    <div className="generatorcontent">
      <ContentDescryption />
      <TabGenerator tabs={tabs} />
      {point.length ? (
        <div className="generatorcontent__title">Doświadczenie</div>
      ) : null}
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
      {education.length ? (
        <div className="generatorcontent__title">Wykształcenie</div>
      ) : null}
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
    </div>
  );
}

export default GeneratorContent;
