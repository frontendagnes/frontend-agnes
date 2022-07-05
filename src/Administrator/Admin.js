import React from "react";
import "./Admin.css";

//components
import AdminMenu from "./AdminMenu/AdminMenu";
import Home from "./Home/Home";

function Admin() {
  return (
    <div className="admin">
      <div className="admin__left">
        <AdminMenu />
      </div>
      <div className="admin__right">
        <Home />
      </div>
    </div>
  );
}

export default Admin;
