import React, { useEffect } from "react";
import "./Generator.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "../../../assets/utility/StateProvider";
import { auth } from "../../../assets/utility/firebase";
// components
import GeneratorSidebar from "../GeneratorSidebar/GeneratorSidebar";
import GeneratorContent from "../GeneratorContent/GeneratorContent";
import Login from "../Login/Login";
function Generator() {
  const [{ user }, dispatch] = useStateValue();



  return (
      <div className="generator">
            <GeneratorContent />
            <GeneratorSidebar />
      </div>

  );
}

export default Generator;
