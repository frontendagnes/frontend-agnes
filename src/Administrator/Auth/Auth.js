import React, { useState } from "react";
import "./Auth.css";

import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  auth,
} from "../../assets/utility/firebase";
//mui
import { Button, TextField } from "@mui/material";
//components
import Fieldset from "../../Questionare/Fieldset/Fieldset";
export default function Authorization() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const signIn = (e) =>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      if(user){
        console.log("user: ", user)
      }
      navigate("/admin")
    })
    .catch((error) => console.log("login error: ", error.message))
  }
  return (
    <form className="auth" onSubmit={signIn}>
      <Fieldset legend="Logowanie">
        <div className="auth__cnt">
          <div className="auth__row">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Wpisz login/email"
              variant="standard"
              fullWidth
            />
          </div>
          <div className="auth__row">
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type= "password"
              label="Wpisz hasło"
              variant="standard"
              fullWidth
            />
          </div>
          <Button type="submit">Zaloguj się</Button>
        </div>
      </Fieldset>
    </form>
  );
}
