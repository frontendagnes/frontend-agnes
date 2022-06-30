import React, { useEffect } from "react";
import "./Admin.css";

import { useStateValue } from "../assets/utility/StateProvider";
import { auth, signOut } from "../assets/utility/firebase";

import { Link, useNavigate, Outlet } from "react-router-dom";
import { Button } from "@mui/material";

function Admin() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "ALERT_SUCCESS",
          item: `Wyogowano porawnie ${user.email}`,
        });
        navigate("/admin");
      })
      .catch((error) => {
        dispatch({ type: "ALERT_ERROR", item: error.message });
      });
  };
  return (
    <div className="admin">
      <div className="admin__left">
        <Button onClick={logOut}>Logout</Button>
        <div>Witaj, {user?.email}</div>
        <Link to="/admin/home">Home</Link>
      </div>
      <div className="admin__right">
          <Outlet />
      </div>
    </div>
  );
}

export default Admin;
