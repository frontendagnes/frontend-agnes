import React from "react";
import "./JsProjects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
//components
import Container from "../../Global/Container/Container";
import ButtonBack from "../../Global/ButtonBack/ButtonBack";
import Project from "../Project/Project";
//images
import slider from "../../assets/images/slider.webp";
import gallery from "../../assets/images/gallery.webp";
import site from "../../assets/images/challenge5.webp";
import snake from "../../assets/images/snake.webp";
import tictactoe from "../../assets/images/tictactoe.webp";
import memory from "../../assets/images/memory.webp";

function JsProjects() {
  const [{ pureIcons }] = useStateValue();
  return (
    <div className="jsprojects">
      <ButtonBack />
      <Container>
        <Project
          title="Slider"
          icons={pureIcons}
          viewCode="https://github.com/frontendagnes/slider"
          live="https://frontendagnes.github.io/slider/"
          img={slider}
          isView
        />
        <Project
          title="Gallery"
          icons={pureIcons}
          viewCode="https://github.com/frontendagnes/gallery"
          live="https://frontendagnes.github.io/gallery/"
          img={gallery}
          isView
        />
        <Project
          title="OnePage"
          icons={pureIcons}
          viewCode="https://github.com/frontendagnes/Challenge-5-Macankumbang"
          live="https://frontendagnes.github.io/Challenge-5-Macankumbang/"
          img={site}
          isView
        />
        <Project
          title="Snake Game"
          icons={pureIcons}
          viewCode="https://github.com/frontendagnes/snake"
          live="https://frontendagnes.github.io/snake/"
          img={snake}
          isView
        />
        <Project
          title="Tic Tac Toe Game"
          icons={pureIcons}
          viewCode="https://github.com/frontendagnes/TicTacToe"
          live="https://frontendagnes.github.io/TicTacToe/"
          img={tictactoe}
          isView
        />
        <Project
          title="Memory Game"
          icons={pureIcons}
          viewCode="https://github.com/frontendagnes/memory-game"
          live="https://frontendagnes.github.io/memory-game/"
          img={memory}
          isView
        />
      </Container>
    </div>
  );
}

export default JsProjects;
