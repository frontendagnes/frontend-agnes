import React from "react";
import "./Information.css";

import { Link } from "react-router-dom";
import { useStateValue } from "../../assets/utility/StateProvider";

function Information() {
  const [{ isEnglish }] = useStateValue();
  return (
    <section className="information">
      {isEnglish
        ? "I code websites on the basis of the graphic design provided  "
        : "Koduję strony internetowe na podstawie dostaczonego projektu graficznego  "}
      <div className="information__button">
        <Link to="/questionare">{isEnglish ? " Check out" : "  Sprawdź"} 🙂</Link>
      </div>
    </section>
  );
}

export default Information;
