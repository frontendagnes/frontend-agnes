import React from "react";
import "./Fieldset.css";
function Fieldset({ children, legend }) {
  return (
    <fieldset className="filedset">
      {legend ? <legend>{legend}</legend> : null}
      {children}
    </fieldset>
  );
}

export default Fieldset;
