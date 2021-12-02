import React, { useState, useEffect } from "react";
import "./GeneratorContent.css";
import TextField from "@mui/material/TextField";
import CurriculumPoint from "../../Curriculum/CurriculumPoint/CurriculumPoint";
import { index } from "../../../assets/utility/functions";
function GeneratorContent() {
  const [isEdit, setIsEdit] = useState(false);
  const [point, setPoint] = useState([]);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [education, setEducatin] = useState("");
  const [courses, setCourses] = useState("");
  useEffect(() => {
    console.log(dateStart);
    console.log(dateEnd);
  }, [dateStart, dateEnd]);

  const addSkill = () => {
    if (skill) {
      setSkills([skill, ...skills]);
      setSkill("");
    } else alert("Wprowadź umiejętność!");
  };
  const sendDate = () => {
    const endDate = `${dateStart} - ${dateEnd}`;
    setDate(endDate);
    console.log("date1>>", endDate);
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
    console.log(point);
    setDate("");
    setTitle("");
    setWorkPlace("");
    setSkill("");
    setSkills([]);
  };
  return (
    <div className="generatorcontent">
      <div className="generatorcontent__title">Doświadczenie</div>
      <div className="generatorcontent__content">
        <form onSubmit={saveData}>
          <div className="generatorcontent__date">
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
            <button type="button" onClick={sendDate}>
              Zapisz Datę
            </button>
            <p className="generatorcontent__description">{date}</p>
          </div>
          <div className="generatorcontent__inputs">
            <div>
              <TextField
                helperText="Wpisz jaki wykonywałeś zawód"
                id="outlined-basic"
                label="Zawód wykonywany"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="generatorcontent__description">{title}</p>
            </div>
            <div>
              <TextField
                helperText="Wpisz firmę w której pracowałeś"
                id="outlined-basic"
                label="Miejsce pracy"
                variant="outlined"
                value={workplace}
                onChange={(e) => setWorkPlace(e.target.value)}
              />
              <p className="generatorcontent__description">{workplace}</p>
            </div>
            <div>
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
              <ul>
                {skills?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <button type="submit">Dodaj punkt</button>
        </form>
        <div>
          {point?.map((item) => (
            // <div>
            //   <p>title: {item.title}</p>
            //   <p>data: {item.date}</p>
            //   <p>workplace: {item.workplace}</p>
            //   <p>skills:{
            //     item.skills?.map((item) =>(
            //       <p>{item}</p>
            //     ))
            //   }</p>
            // </div>
            <CurriculumPoint
              data={item.data}
              title={item.title}
              content={item.workplace}
              arr={item.skills}
            />
          ))}
        </div>
      </div>
      <div className="generatorcontent__title">Wykształcenie</div>
      <div className="generatorcontent__content">vvvv</div>
      <div className="generatorcontent__title">Kursy</div>
      <div className="generatorcontent__content">vvvv</div>
      <div className="generatorcontent__formula">
        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia
        rekrutacji.
      </div>
    </div>
  );
}

export default GeneratorContent;
