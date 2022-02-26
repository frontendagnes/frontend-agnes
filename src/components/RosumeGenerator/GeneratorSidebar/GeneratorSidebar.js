import React from "react";
import "./GeneratorSidebar.css";
import TextField from "@mui/material/TextField";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { removeSkill } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";
import NumberFormat from "react-number-format";
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
      dispatch({
        type: "ALERT__ERROR",
        item: "Pole umiejętności nie może być puste",
      });
    }
    setSkill("");
  };

  return (
    <div className="generatorsidebar">
      <div className="generatorsidebar__container">
        <form>
          <h4>Informacje ogólne</h4>
          <div className="generatorsidebar__title">
            Dane Osobowe: (wymagane)
          </div>
          <div>
            <TextField
              fullWidth
              helperText="Wpisz swoje imię i nazwisko."
              placeholder="np. Jan Kowalski"
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
              placeholder="np. Asystent ds. kadrowo płacowych"
              id="outlined-basic"
              label="Stanowisko"
              variant="outlined"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div></div>
          <div>
            <TextField
              fullWidth
              helperText="Wpisz swój adres e-mail."
              placeholder="example@mail.com"
              id="outlined-basic"
              label="e-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <NumberFormat
              fullWidth
              customInput={TextField}
              format="### ### ###"
              mask="_"
              placeholder="np. 123 456 789"
              helperText="Wpisz swój numer telefonu."
              label="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="generatorsidebar__title">
            Umiejętności: (opcjonalnie)
          </div>
          <div>
            <TextField
              fullWidth
              helperText="Podaj swoje umiejętności."
              placeholder="np. prawo jazdy kat. B, umiejętność pracy w zespole, komunikatywność, kreatywność itd."
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
              {skills.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                  <RemoveCircleIcon
                    color="error"
                    onClick={() => removeSkill(index, skills, setSkills)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneratorSidebar;
