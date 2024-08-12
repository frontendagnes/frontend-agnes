import React from "react";
import "./QuestionareInformation.css";

import aPhoto from "../../assets/images/open-graph.jpg";
function QuestionareInformation() {
  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
  return (
    <div className="questionareInformation">
      <img src={aPhoto} loading="lazy" title="web design" alt="web design" />
      <div>
        <p>
          Mogę stworzyć stronę www na podstawie dostarczonych przez Ciebie
          projektów graficznych
        </p>
        <p>
          Masz projekt a nie potrafisz go zakodować dobrze trafiłeś, zrobię to
          za Ciebie.
        </p>
        <p>
          Jako frontend developer zajmuję się tylko wyglądem projektu (bez
          backendu), jako bazy danych używam{" "}
          <a href="https://firebase.google.com/">firebase</a> - tam również
          umieszczam projekty w czasie realizacji do podglądu dla klienta.
        </p>
        <p>Wszystkie niezbędne grafiki (zdjęcia) powinien dostarczyć klient.</p>
        <p>
          Na podstawie{" "}
          <b style={{ letterSpacing: "4px", fontSize: "1.3rem" }}>
            ankiety{" "}
          </b>
          będę w stanie podać Ci orientacyjną cenę usługi (może się zmnienić w zależności od ostatecznych ustaleń). Podchodzę indywidualnie do każdego
          projektu – nie wszystkie są takie same więc cena jest zależna od
          oczekiwań klienta.
        </p>
        <p>
          Jeżeli nie chcesz tworzyć całej strony tylko zmienić jedną rzecz np.
          nagłówek lub menu nie wypełniaj formularza opisz wszystko w
          dodatkowych informacjach w pkt 4 ankiety i załącz projekt.
        </p>
        <p>
          Nie masz projektu też możesz napisać - może razem coś wymyślimy{" "}
          <Emoji label="smile" symbol="😀" />
        </p>
        <p>
          Wycena nie jest zobowiązująca. Nie będą Ci odpowiadać moje warunki po
          prostu zakończymy wspópracę na tym etapie.
        </p>
      </div>
    </div>
  );
}

export default QuestionareInformation;
