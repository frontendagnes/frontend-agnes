import React from "react";
import { Link } from "react-router-dom";

export default function ContentDescryption() {
  return (
    <div className="generatorcontent__tabs">
      <div className="generatorcontent__description">
        Generator nie wysyła i nie zapisuje żadnych danych dlatego po
        odświeżeniu strony wszystkie informację znikają i trzeba je wpisywać od
        nowa. Proszę o uważne korzystanie z aplikacji żeby nie stracić
        wprowadzonych danych!
        <div>
          <b>UWAGA:</b> Drukując CV w zaawansowanych opcjach wydruku odznacz
          drukowanie nagłowka i stopki. Ustaw również skale wydruku na 100%!
        </div>
      </div>
      <h4>
        Wypełnij formularze i wybierz przycisk Utwórz CV.
        <div title="Przykładowe CV">
          <Link to="/resume-agnieszka.kaminska">
            Przykład wypełnionego CV(zalecane otwarcie w nowej karcie)
          </Link>
        </div>
      </h4>
    </div>
  );
}
