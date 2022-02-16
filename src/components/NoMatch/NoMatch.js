import React from "react";
import "./NoMatch.css";

import { useLocation, useNavigate } from "react-router-dom";
function NoMatch() {
  const location = useLocation();
  const history = useNavigate()

  const handleClick = () =>{
   history("/")
  }
  return (
    <div className="noMatch">
      <div className="noMatch__top">
        The entered address <span>{location.pathname}</span> does not exist
      </div>
      <div className="noMatch__bottom">
        <button onClick={handleClick}>Go to Home page</button>
      </div>
    </div>
  );
}

export default NoMatch;
