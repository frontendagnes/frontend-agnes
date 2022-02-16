import React from "react";
import "./Clientmenu.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../assets/utility/StateProvider";
import { auth } from "../../../assets/utility/firebase";
import { signOut } from "firebase/auth";

function Clientmenu() {
  const [{ user }, dispatch] = useStateValue();
  const history = useNavigate();
  const logout = () => {
    if (user) {
      signOut(auth).then(() => {
          history("/login")
          dispatch({type: "ALERT_LOGOUT", item: user?.email })
      })
      .catch((error) => {
          console.error("Logout>>", error)
          dispatch({type: "ALERT__ERROR", item: error.message })
      })
    }
  };
  return (
    <div className="clientmenu">
      <div className="clientmenu__name">Hello, {user?.email}</div>
      <div className="clientmenu__logout" onClick={logout}>
        Logout
      </div>
    </div>
  );
}

export default Clientmenu;
