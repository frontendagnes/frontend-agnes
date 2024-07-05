import React from "react";
import "./ConstactInputs.css";
import { TextField } from "@mui/material";

function ContactInputs({name, setName, email, setEmail}) {
  return (
    <>
      <div className="contactInputs__input">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Podaj Imię"
          variant="standard"
          fullWidth
        />
      </div>
      <div className="contactInputs__input">
        <TextField
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          label="Podaj email"
          variant="standard"
          fullWidth
        />
      </div>
    </>
  );
}

export default ContactInputs;
