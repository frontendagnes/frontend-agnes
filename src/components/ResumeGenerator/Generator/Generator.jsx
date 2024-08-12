import React, { useEffect, useState } from "react";
import "./Generator.css";
//other
import { useStateValue } from "../../../assets/utility/StateProvider";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
//components
import GeneratorContent from "../GeneratorContent/GeneratorContent";
import ButtonBack from "../../../Global/ButtonBack/ButtonBack";
import ValidationError from "../ValidatinError/ValidationError";
import { validate } from "./vialidate";
// mui
import Button from "@mui/material/Button";

const MotionButton = motion(Button);
function Generator() {
  // eslint-disable-next-line
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
      <AnimatePresence>
        {name ? (
          <div className="generator__button">
            <MotionButton
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              sx={{
                fontSize: "18px",
                padding: "10px 20px",
                letterSpacing: "3px",
              }}
              onClick={addResume}
              variant="contained"
              color="success"
            >
              Utwórz CV
            </MotionButton>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Generator;
