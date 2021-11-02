import React from "react";
import "./JsProjects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import Container from "../Global/Container/Container";
import ButtonBack from "../Global/ButtonBack/ButtonBack";
import Project from "../Project/Project";
//images
import slider from '../../assets/images/slider.webp'
import gallery from '../../assets/images/gallery.webp'
import site from '../../assets/images/challenge5.webp'
import snake from '../../assets/images/snake.webp'
import tictactoe from '../../assets/images/tictactoe.webp'
import memory from '../../assets/images/memory.webp'
function JsProjects() {
  const [{ pureIcons }] = useStateValue();
  return (
    <div className="jsprojects">
      <ButtonBack />
      <Container>
        <Project 
          title="Slider" 
          icons={pureIcons}
          viewCode="https://github.com/zabula81/slider" 
          live="https://zabula81.github.io/slider/"
          img={slider}
          isView 
        />
        <Project 
          title="Gallery" 
          icons={pureIcons}
          viewCode="https://github.com/zabula81/gallery" 
          live="https://zabula81.github.io/gallery/"
          img={gallery}
          isView 
        />
        <Project 
          title="Strona typu OnePage" 
          icons={pureIcons} 
          viewCode="https://github.com/zabula81/Challenge-5-Macankumbang"
          live="https://zabula81.github.io/Challenge-5-Macankumbang/"
          img={site}
          isView 
        />
        <Project 
          title="Snake Game" 
          icons={pureIcons}
          viewCode="https://github.com/zabula81/snake"
          live="https://zabula81.github.io/snake/"
          img={snake}
          isView 
        />
        <Project 
          title="Tic Tac Toe Game" 
          icons={pureIcons} 
          viewCode="https://github.com/zabula81/TicTacToe"
          live="https://zabula81.github.io/TicTacToe/"
          img={tictactoe}
          isView 
        />
        <Project 
          title="Memory Game" 
          icons={pureIcons} 
          viewCode="https://github.com/zabula81/memory-game"
          live="https://zabula81.github.io/memory-game/"
          img={memory}
          isView 
        />
      </Container>
    </div>
  );
}

export default JsProjects;
