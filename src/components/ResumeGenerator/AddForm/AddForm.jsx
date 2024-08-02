import React, { useState, useEffect } from "react";
import "./AddForm.css";

import { AnimatePresence } from "framer-motion";

//mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";
import { removeSkill } from "../../../assets/utility/functions";
//components
import ValidationError from "../ValidatinError/ValidationError";
import SkillItem from "../SkillItem/SkillItem";
import AddSkill from "../AddSkill/AddSkill";
import { validate } from "./validate";

function AddForm({
  setPoint,
  point,
  name,
  helperName,
  place,
  helperPlace,
  placeholderName,
  placeholdePlace,
  placeholdSkill,
}) {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [{ alert }, dispatch] = useStateValue();

  useEffect(() => {
    let start = new Date(dateStart);
    let monthStart = start.getMonth() + 1;
    let yearStart = start.getFullYear();

    let end = new Date(dateEnd);
    let monthEnd = end.getMonth() + 1;
    let yearEnd = end.getFullYear();

    const endDate = () => {
      if (dateEnd) {
        return `${monthStart}-${yearStart} - ${monthEnd}-${yearEnd}`;
      } else {
        return `${monthStart}-${yearStart} - nadal`;
      }
    };

    setDate(endDate);
  }, [dateEnd, dateStart]);

  const addSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      setSkill("");
    } else
      dispatch({
        type: "ALERT__ERROR",
        item: "Pole umięjętności nie może być puste",
      });
  };

  const saveData = (e) => {
    e.preventDefault();

    const msg = validate(dateStart, dateEnd, title, workplace);
    if (msg) {
      setError(msg);
      return;
    }

    setPoint([
      {
        id: index(),
        date: date,
        title: title,
        workplace: workplace,
        skills: skills,
      },
      ...point,
    ]);

    setDate("");
    setTitle("");
    setWorkPlace("");
    setSkill("");
    setSkills([]);
    setDateStart("");
    setDateEnd("");
    setError("");
  };
  return (
    <div className="addform">
      {error ? <ValidationError text={error} /> : null}
      <form>
        <div className="addform__date">
          <div>
            <TextField
              type="date"
              variant="outlined"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
              helperText="Podaj datę rozpoczęcia"
              fullWidth
            />
          </div>
          <div>
            <TextField
              type="date"
              variant="outlined"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
              helperText="Podaj datę zakończenia"
              fullWidth
            />
          </div>
        </div>
        <div className="addform__inputs">
          <div className="addform__nameInputs">
            <div>
              <TextField
                helperText={helperName}
                placeholder={placeholderName}
                id="outlined-basic"
                label={name}
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                helperText={helperPlace}
                placeholder={placeholdePlace}
                id="outlined-basic"
                label={place}
                variant="outlined"
                value={workplace}
                onChange={(e) => setWorkPlace(e.target.value)}
                fullWidth
              />
            </div>
          </div>
          <div className="addform__skills">
            <AddSkill
              placeholder={placeholdSkill}
              addSkill={addSkill}
              skill={skill}
              setSkill={setSkill}
            />
            <div className="addform__descriptions">
              <ul className="addform__description">
                <AnimatePresence initial={false}>
                  {skills?.map((item, index) => (
                    <SkillItem
                      key={index}
                      index={index}
                      item={item}
                      skills={skill}
                      setSkills={setSkills}
                      removeSkill={() => removeSkill(index, skills, setSkills)}
                    />
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
        <div className="addform__buttons">
          <Button
            type="button"
            onClick={saveData}
            variant="outlined"
            sx={{ letterSpacing: "3px" }}
          >
            Dodaj Punkt
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
