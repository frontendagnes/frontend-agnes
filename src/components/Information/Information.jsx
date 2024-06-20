import React from "react";
import "./Information.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../assets/utility/StateProvider";

function Information({ style }) {
  const [{ isEnglish }] = useStateValue();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/questionare");
  };

  return (
    <div className="information" style={style?.div}>
      <button
        onClick={handleClick}
        style={style?.button}
        title="Projektuje strony na podstawie dołączonego projektu"
      >
        {isEnglish ? "See more" : "Zobacz więcej"}
      </button>
    </div>
  );
}

export default Information;
