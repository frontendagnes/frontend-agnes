import React from "react";
import "./AddSkill.css";

//mui
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

function AddSkill({ placeholder, addSkill, skill, setSkill }) {
  return (
    <div className="addSkill">
      <TextField
        fullWidth
        placeholder={placeholder}
        id="outlined-basic"
        label="Podaj swoje umiejętności"
        variant="outlined"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <AddIcon
        fontSize="large"
        color="success"
        onClick={addSkill}
        sx={{ cursor: "pointer", color: "#5a71aa" }}
      />
    </div>
  );
}

export default AddSkill;
