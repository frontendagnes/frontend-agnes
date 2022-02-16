import React from "react";
import "./ButtonBack.css";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const history = useNavigate();

  const backToHomepage = () => {
    history("/");
  };
  return (
    <div className="buttonback">
      <button type="button" onClick={backToHomepage}>
        Home Page
      </button>
    </div>
  );
}

export default ButtonBack;
