import React, { useState } from "react";
import "./Generator.css";
//other
import { useStateValue } from "../../../assets/utility/StateProvider";
import { useNavigate } from "react-router-dom";
//components
import GeneratorContent from "../GeneratorContent/GeneratorContent";
import ButtonBack from "../../Global/ButtonBack/ButtonBack";
import ValidationError from "../ValidatinError/ValidationError";
// mui
import Button from '@mui/material/Button';

const validate = (name, phone, email, point, education) => {
  if (!name) {
    return "Wpisz imię i nazwisko";
  }
  if (!email) {
    return "Wpisz adres email";
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    return "Zły format e-mail";
  }
  if (!phone) {
    return "Wpisz numer telefonu";
  }
  if (!point.length) {
    return "Sprawdź czy dodałeś doświadczenie ";
  }
  if (!education.length) {
    return "Sprawdź czy dodałeś szkołę";
  }
};
function Generator() {
  const [{ cvs }, dispatch] = useStateValue();

  const [error, setError] = useState("");
  const history = useNavigate();
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

  const addResume = () => {
    const msg = validate(name, phone, email, point, education);
    if (msg) {
      setError(msg);
      dispatch({ type: "ALERT__ERROR", item: msg });
      return;
    }

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
    setError("");
    history("/printingresume");
  };
  return (
    <div className="generator">
      <ButtonBack />
      <div className="generator__container">
        {error ? <ValidationError text={error} /> : null}
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
      </div>
      <div className="generator__button">
        <Button sx={{fontSize: "18px"}} onClick={addResume}>
          Utwórz CV
        </Button>
      </div>
    </div>
  );
}

export default Generator;
