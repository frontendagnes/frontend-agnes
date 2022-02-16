import React from "react";
import "./GeneratorSidebar.css";
import TextField from "@mui/material/TextField";
import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";

function GeneratorSidebar({
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
  const [{ alert }, dispatch] = useStateValue();
  const addSkill = () => {
    if (skill) {
      setSkills([skill, ...skills]);
    } else {
      dispatch({ type: "ALERT__ERROR", item: "Pole nie może być puste" });
    }
    setSkill("");
  };

  return (
    <div className="generatorsidebar">
      <div className="generatorsidebar__container">
        <form>
          <h4>Informacje ogólne</h4>
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
              label="Stanowisko"
              variant="outlined"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div>
            <input type="file" />
            <button type="button"> Załąduj Zdjęcie</button>
            <h5>Wybierz zdjęcie</h5>
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
              label="Telefon"
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
              label="Umiejętności"
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
    </div>
  );
}

export default GeneratorSidebar;
