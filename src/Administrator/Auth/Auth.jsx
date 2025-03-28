import React, { useState } from "react";
import "./Auth.css";

import { validate } from "../validate";

import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../assets/utility/StateProvider";
import {
  signInWithEmailAndPassword,
  auth,
} from "../../assets/utility/firebase";
//mui
import { Button } from "@mui/material";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
//components
import Fieldset from "../../Questionare/Fieldset/Fieldset";

export default function Authorization() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const [{ alert }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    const msg = validate(age, email, password);
    if (msg) {
      dispatch({ type: "ALERT__ERROR", item: msg });
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          dispatch({ type: "ALERT__OK", item: user.user.email });
        }
        navigate("/admin");
      })
      .catch((error) =>
        dispatch({ type: "ALERT__ERROR", item: error.message })
      );
  };
  return (
    <form className="auth" onSubmit={signIn}>
      <Fieldset legend="Logowanie">
        <div className="auth__cnt">
          <Stack spacing={2}>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Wpisz login/email"
              placeholder="Wpisz login/email"
              size="lg"
              startDecorator={<EmailIcon />}
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Wpisz hasło"
              placeholder="Wpisz hasło"
              size="lg"
              startDecorator={<VpnKeyIcon />}
            />
          </Stack>
          <input
            type="text"
            placeholder="age"
            name="age"
            autoComplete="off"
            className="auth__age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button type="submit">Zaloguj się</Button>
        </div>
      </Fieldset>
    </form>
  );
}
