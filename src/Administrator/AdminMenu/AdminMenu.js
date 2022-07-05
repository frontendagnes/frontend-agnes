import React from "react";
import "./AdminMenu.css";

import { useStateValue } from "../../assets/utility/StateProvider";
import { auth, signOut } from "../../assets/utility/firebase";
import { Link, useNavigate } from "react-router-dom";
//mui
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = styled(Button)`
  font-weight: bolder;
`;

function AdminMenu() {
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
    <div className="adminmenu">
      <div className="amidnmenu__header">
        <p>Witaj,</p> <p className="adminmenu__user">{user?.email}</p>
      </div>
      <div className="amdinmenu__button">
        <LogoutButton onClick={logOut}>
          <LogoutIcon sx={{ marginRight: "10px" }} />
          Logout
        </LogoutButton>
      </div>
    </div>
  );
}

export default AdminMenu;
