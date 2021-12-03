import React, { useState } from "react";
import "./AddForm.css";
import TextField from "@mui/material/TextField";
import { index } from "../../../assets/utility/functions";
function AddForm({ setPoint, point,name, helperName, place, helperPlace }) {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skill) {
      setSkills([skill, ...skills]);
      setSkill("");
    } else alert("Wprowadź umiejętność!");
  };
  const sendDate = (e) => {
    e.preventDefault();

    let start = new Date(dateStart);
    let monthStart = start.getMonth() + 1;
    let yearStart = start.getFullYear();

    let end = new Date(dateEnd);
    let monthEnd = end.getMonth() + 1;
    let yearEnd = end.getFullYear();

    const endDate = `${monthStart}-${yearStart} - ${monthEnd}-${yearEnd}`;

    setDate(endDate);
  };

  const saveData = (e) => {
    e.preventDefault();
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
  };
  return (
    <div className="addform">
      <form>
        <div className="addform__date">
          <div>
            <input
              type="date"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
            />
            <h5>Data rozpoczęcia</h5>
          </div>
          <div>
            <input
              type="date"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
            />
            <h5>Data zakończenia</h5>
          </div>
          <div className="addform__dateWrapper">
            <button onClick={sendDate}>Zapisz Datę</button>
            <p className="addform__description">{date}</p>
          </div>
        </div>
        <div className="addform__inputs">
          <div>
            <TextField
              helperText={helperName}
              id="outlined-basic"
              label={name}
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="addform__description">{title}</p>
          </div>
          <div>
            <TextField
              helperText={helperPlace}
              id="outlined-basic"
              label={place}
              variant="outlined"
              value={workplace}
              onChange={(e) => setWorkPlace(e.target.value)}
            />
            <p className="addform__description">{workplace}</p>
          </div>
          <div className="addform__skills">
            <TextField
              helperText="Wpisz nabyte umiejętności"
              id="outlined-basic"
              label="Nabyte umiejętności"
              variant="outlined"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <button type="button" onClick={addSkill}>
              Dodaj umiejętność
            </button>
            <ul className="addform__description">
              {skills?.map((item) => (
                <li key={index()}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="addform__buttons">
          <button type="button" onClick={saveData}>
            Dodaj Punkt
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
