import React from 'react'
import "./HiddenInputs.css"
function HiddenInputs({message, setMessage, email, setEmail}) {
  return (
    <>
      <input
        type="text"
        name="message"
        className="hiddenInputs"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        className="hiddenInputs"
        value={email}
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}

export default HiddenInputs