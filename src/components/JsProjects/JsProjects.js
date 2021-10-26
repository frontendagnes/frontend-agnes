import React from "react";
import "./JsProjects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import Container from "../Container/Container";
import ButtonBack from "../ButtonBack/ButtonBack";
import Project from "../Project/Project";
function JsProjects() {
  const [{ pureIcons }] = useStateValue();
  return (
    <div className="jsprojects">
      <ButtonBack />
      <Container>
      <Project 
            title="Slider"
            icons={pureIcons} 
            isView 
        />
        <Project 
            title="Gallery"
            icons={pureIcons} 
            isView 
        />
        <Project 
            title="Challenge#5"
            icons={pureIcons} 
            isView 
        />
        <Project 
            title="Snake Game"
            icons={pureIcons} 
            isView 
        />
        <Project 
            title="Tic Tac Toe"
            icons={pureIcons} 
            isView 
        />
         <Project 
            title="Memory Game"
            icons={pureIcons} 
            isView 
        />
      </Container>
    </div>
  );
}

export default JsProjects;
