import React from "react";
import "./Fieldset.css";
function Fieldset({ children, legend, className}) {
  return (
    <fieldset className={`fieldset ${className}`} >
      {legend ? <legend>{legend}</legend> : null}
      {children}
    </fieldset>
  );
}

export default Fieldset;
