import React, { useState } from "react";
import "./Register.css";
// materia-ui icons
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles"
//react-roter-dom
import { useNavigate, Link } from "react-router-dom";
// API
import { auth } from "../../../assets/utility/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"
//component
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
  } else if (password.length < 6) {
    return "The password must be 6 characters long";
  }
  if (test) {
    return "You have not passed the spam filter. Please refresh the page and try again";
  }
  return null;
};
const RegisterButton = styled(Button)({
  background: "#53679a",
  color: "#ffffff",
  fontWeight: 600,

  "&:hover":{ 
    background: "#3f4d70",
  }
})
function Register() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // filtr antyspam
  const [test, setTest] = useState("");
  const [{alert}, dispatch] =useStateValue()
  const register = (e) => {
    e.preventDefault();
    const errMsg = validate(email, password, test);
    if (errMsg) {
      setError(errMsg);
      return;
    }

      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        history("/");
        dispatch({type: "ALERT_REGISETER"})
      })
      .catch((error) => {
        dispatch({type: "ALERT__ERROR", itme: error.message})
        console.log(error.message)});
  };

  return (
    <div className="register">
      <ButtonBack />
      <div className="register__wrapper">
        {error && <ValidationError text={error} />}
        <div className="register__logo">Generator Register</div>
        <form onSubmit={register}>
          <TextField
            className="register__input"
            label="Enter e-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="register__input"
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
            className="register__age"
            value={test}
            onChange={(e) => setTest(e.target.value)}
          />
          <RegisterButton type="submit" className="register__button">
            Create Acount
          </RegisterButton>
        </form>
      </div>
      <div>
        Have an account? <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}

export default Register;
