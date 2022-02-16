import React, { useState } from "react";
import "./Login.css";
// react-router-dom
import { Link, useNavigate } from "react-router-dom";
// API
import { auth } from "../../../assets/utility/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// materia-ui icons
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import ValidationError from "../ValidatinError/ValidationError";
import ButtonBack from "../../Global/ButtonBack/ButtonBack";
import { useStateValue } from "../../../assets/utility/StateProvider";
const validate = (email, password, test) => {
  if (!email) {
    return "E-mail is required";
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    return "Invalid e-mail format";
  }
  if (!password) {
    return "Password is required";
  }
  if (test) {
    return "You have not passed the spam filter. Please refresh the page and try again";
  }
  return null;
};

const LoginButton = styled(Button)({
  background: "#53679a",
  color: "#ffffff",
  fontWeight: 600,

  "&:hover": {
    background: "#3f4d70",
  },
});
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // filtr antyspam
  const [test, setTest] = useState("");
  const [{ alert }, dispatch] = useStateValue();
  const history = useNavigate();
  const signIn = (e) => {
    e.preventDefault();

    const errMsg = validate(email, password, test);
    if (errMsg) {
      setError(errMsg);
      return;
    }
    //firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          history("/resume-generator");
          dispatch({ type: "ALERT__OK", item: user.user.email });
        }
      })
      .catch((error) => {
        console.error("Login>>", error.message);
        dispatch({ type: "ALERT__ERROR", item: error.message });
      });
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
        <ButtonBack />
      <div className="login__wrapper">
        {error && <ValidationError text={error} />}
        <div className="login__logo">Generator Login</div>
        <form onSubmit={signIn}>
          <TextField
            autocomplete="off"
            className="login__input"
            label="Enter login"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autocomplete="off"
            className="login__input"
            label="Enter password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* input antyspam */}
          <input
            autocomplete="off"
            type="text"
            name="age"
            className="login__age"
            value={test}
            onChange={(e) => setTest(e.target.value)}
          />
          <LoginButton type="submit" className="login__button">
            Log In
          </LoginButton>
        </form>
      </div>
      <div className="login__infoRegister">
        You do not have an account? Register
        <Link to="/register"> here</Link>
      </div>
    </div>
  );
}

export default Login;
