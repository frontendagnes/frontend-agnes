import React, { useState, useEffect } from "react";
import "./AddForm.css";
//mui
import TextField from "@mui/material/TextField";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';

import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";
import { removeSkill } from "../../../assets/utility/functions";
//components
import ValidationError from "../ValidatinError/ValidationError";

const validate = (dateStart, title, workplace) => {
  if (!dateStart) {
    return "Sprawdź datę rozpoczęcia";
  }

  if (!title) {
    return "Sprawdź nazwę";
  }
  if (!workplace) {
    return "Sprawdź miejsce";
  }

  return null;
};

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
      setSkills([skill, ...skills]);
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
        {error ? <ValidationError text={error} /> : null}
        <div className="addform__inputs">
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
          <div className="addform__skills">
            <div className="addform__input">
              <TextField
                placeholder={placeholdSkill}
                id="outlined-basic"
                label="Wpisz nabyte umiejętności po kolei (opcjonalne)"
                variant="outlined"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                fullWidth
              />
            </div>
            <AddIcon
              className="addform__addButton"
              fontSize="large"
              sx={{color: "#5a71aa"}}
              onClick={addSkill}
            />
          </div>
          <div className="addform__descriptions">
            <ul className="addform__description">
              {skills?.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                  <RemoveCircleIcon
                    color="error"
                    onClick={() => removeSkill(index, skills, setSkills)}
                  />
                </li>
              ))}
            </ul>
            <p></p>
          </div>
        </div>
        <div className="addform__buttons">
          <Button type="button" onClick={saveData}>
            Dodaj Punkt
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
