import React, { useState, useEffect } from "react";
import "./Generator.css";
// components
import GeneratorSidebar from "../GeneratorSidebar/GeneratorSidebar";
import GeneratorContent from "../GeneratorContent/GeneratorContent";
import Clientmenu from "../ClientMenu/Clientmenu";
import ButtonBack from "../../Global/ButtonBack/ButtonBack";
//other
import { useStateValue } from "../../../assets/utility/StateProvider";
import { useNavigate } from "react-router-dom"
function Generator() {
  const [{ cvs }, dispatch] = useStateValue();
  const history = useNavigate()
  //GeneratorContent
  const [point, setPoint] = useState([]);
  const [education, setEducation] = useState([]);
  const [courses, setCourses] = useState([]);
  //GeneratorSidebar
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    console.log(cvs);
  }, [cvs]);
  const addResume = () => {
    dispatch({
      type: "SET_CVS",
      item: {
        name: name,
        job: job,
        email: email,
        phone: phone,
        skills: skills,
        work: point,
        education: education,
        courses: courses,
      },
    });
    history("/printingrosume")
  };
  return (
    <div className="generator">
      <ButtonBack />
      <Clientmenu />
      <div className="generator__container">
        <GeneratorContent
          point={point}
          setPoint={setPoint}
          education={education}
          setEducation={setEducation}
          courses={courses}
          setCourses={setCourses}
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
        {/* <GeneratorSidebar
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
        /> */}
      </div>
      <div className="generator__button">
        <button type="button" onClick={addResume}>
          Dodaj CV
        </button>
      </div>
    </div>
  );
}

export default Generator;
