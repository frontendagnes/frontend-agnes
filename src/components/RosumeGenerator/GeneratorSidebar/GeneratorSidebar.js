import React, { useState, useRef } from "react";
import "./GeneratorSidebar.css";
import TextField from "@mui/material/TextField";
import Tagline from "../../Curriculum/Tagline/Tagline";
import { index } from "../../../assets/utility/functions";
import { style } from "../../Global/style.js";
function GeneratorSidebar() {
  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0])
    console.log("1>>",e.target.files)
    console.log("2>>",e.target.files[0])
    console.log("3>>", selectedFile)
  }
  const saveData = () => {
    setIsEdit(!isEdit);
  };

  const addSkill = () => {
    if (skill) {
      setSkills([skill, ...skills]);
    } else {
      alert("Pole jest puste");
    }
    setSkill("");
  };
  return (
    <div className="generatorsidebar">
      {isEdit ? (
        <div className="generatorsidebar__container">
          <form>
            <h4>Wypełnij pola i wybierz zatwierdź!</h4>
            <div>
              <TextField
                fullWidth
                helperText="Wpisz swoje imię i nazwisko."
                id="outlined-basic"
                label="Imię i Nazwisko"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                helperText="Wpisz nazwę stanowiska o które się ubiegasz."
                id="outlined-basic"
                label="Job"
                variant="outlined"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div>
              <input type="file" onChange={handleFileInput}/>
            </div>
            <div className="generatorsidebar__title">Dane Osobowe:</div>
            <div>
              <TextField
                fullWidth
                helperText="Wpisz swój adres e-mail."
                id="outlined-basic"
                label="e-mail"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                helperText="Wpisz swój numer telefonu."
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="generatorsidebar__title">Umiejętności:</div>
            <div>
              <TextField
                fullWidth
                helperText="Podaj swoje umiejętności."
                id="outlined-basic"
                label="Skill"
                variant="outlined"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
              <button type="button" onClick={addSkill}>
                Dodaj umiejętność
              </button>
              <ul>
                {skills.map((item) => (
                  <li key={index()}>{item}</li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      ) : (
        <Tagline
          name={name}
          job={job}
          email={email}
          phone={phone}
          skills={skills}
          photo={selectedFile}
          isFull
        />
      )}

      <button type="button" onClick={saveData}>
        {isEdit ? "Zatwierdź" : "Edytuj"}
      </button>
    </div>
  );
}

export default GeneratorSidebar;
