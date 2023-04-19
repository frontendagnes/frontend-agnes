import React from "react";
import "./Title.css";

import { useStateValue } from "../../assets/utility/StateProvider";
function Title({ polish, english }) {
  const [{ isEnglish }] = useStateValue();
  return <h2 className="title">{!isEnglish ? polish : english}</h2>;
}

export default Title;
