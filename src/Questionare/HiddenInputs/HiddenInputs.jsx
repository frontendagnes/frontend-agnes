import React from "react";
import "./HiddenInputs.css";
function HiddenInputs({ email, message, handleChange }) {
  return (
    <>
      <input
        type="text"
        name="message"
        className="hiddenInputs"
        value={message}
        onChange={handleChange}
      />
      <input
        className="hiddenInputs"
        value={email}
        type="email"
        name="email"
        onChange={handleChange}
      />
    </>
  );
}

export default HiddenInputs;
