import React, { useState } from "react";
import "./GeneratorSidebar.css";
import TextField from "@mui/material/TextField";
function GeneratorSidebar() {
  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const saveData = () => {
      setIsEdit(!isEdit)
  }
  return (
    <div className="generatorsidebar">
      <div className="generatorsidebar__top">
        {isEdit ?
          <form onSubmit={saveData}>
            <div>
              <TextField
                fullWidth
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
                id="outlined-basic"
                label="Job"
                variant="outlined"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <button type="submit">Zapisz</button>
          </form>
          :
          <div>
              <span>{name}</span>
              <span>{job}</span>
              <button type="button" onClick={saveData}>Edit</button>
          </div>
        }
      </div>
    </div>
  );
}

export default GeneratorSidebar;
