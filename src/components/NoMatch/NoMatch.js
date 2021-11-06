import React from "react";
import "./NoMatch.css";

import { useLocation, useHistory } from "react-router-dom";
function NoMatch() {
  const location = useLocation();
  const history = useHistory()

  const handleClick = () =>{
    history.push("/")
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
