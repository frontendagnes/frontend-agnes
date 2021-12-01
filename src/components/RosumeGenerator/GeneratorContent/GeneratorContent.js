import React, { useState, useEffect } from "react";
import "./GeneratorContent.css";
import TextField from "@mui/material/TextField";
function GeneratorContent() {
  const [isEdit, setIsEdit] = useState(false)
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducatin] = useState("");
  const [courses, setCourses] = useState("");
  useEffect(() => {
    console.log(dateStart);
    console.log(dateEnd)
  }, [dateStart, dateEnd]);
  const handleChange = (e) => {
      setExperience(e.target.value)
  }
  return (
    <div className="generatorcontent">
      <div className="generatorcontent__title">Doświadczenie</div>
      <div className="generatorcontent__content">
        <form>
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
          </div>
          <div className="generatorcontent__inputs">
          <TextField
                helperText="Wpisz jaki wykonywałeś zawód"
                id="outlined-basic"
                label="Zawód wykonywany"
                variant="outlined"
                value={experience}
                onChange={handleChange}
              />
          </div>
        </form>
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
