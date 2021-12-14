import React, { useState  } from "react";
import "./GeneratorSidebar.css";
import TextField from "@mui/material/TextField";
import Tagline from "../../Curriculum/Tagline/Tagline";
import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider"
import db, { storage } from "../../../assets/utility/firebase.js"
function GeneratorSidebar() {
  const [{ isEdit }] = useStateValue();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null)
  const [photos, setPhotos] = useState([])

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const addSkill = () => {
    if (skill) {
      setSkills([skill, ...skills]);
    } else {
      alert("Pole jest puste");
    }
    setSkill("");
  };
  const uploadImage = e =>{
    if(selectedFile){

    } else { alert("Zdjęcie nie zostało wybrane")}
  }
  return (
    <div className="generatorsidebar">
      {isEdit ? (
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
              <input type="file" onChange={handleFileInput}/>
              <button type="button" onClick={uploadImage}> Załąduj Zdjęcie</button>
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
    </div>
  );
}

export default GeneratorSidebar;
