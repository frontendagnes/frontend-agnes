import React from "react";
import "./Tagline.css";
import photo from "../../../assets/images/me.jpg";
function Tagline() {
  return (
    <div className="tagline" >
      <div className="tagline__container" >
      <div className="tagline__top">
        <div className="tagline__name">Agnieszka Kamińska</div>
        <div className="tagline__profession">Junior Front-End Developer</div>
        <img src={photo} alt="Agnieszka Kamińska" title="Agnieszka Kamińska" />
      </div>
      <div className="tagline__bottom">
        <div className="tagline__personal">
          <div className="tagline__title">Dane Osobowe:</div>
          <ul>
            <li>
              <span>E-mail:</span>zabula81@o2.pl
            </li>
            <li>
              <span>Numer telefonu</span>603430340
            </li>
          </ul>
        </div>
        <div className="tagline__skills">
          <div className="tagline__title">Umiejętności: </div>
          <ul>
            <li>Prawo jazdy kat. B</li>
            <li>Umiejętnośc pracy w zespole</li>
            <li>Komunikatywność</li>
            <li>Kreatywność</li>
            <li>Dociekliwość i chęć rozwoju zawodowego</li>
            <li>Implementowanie responsywnych interfejsów uzytkownika</li>
            <li>Znajomoąść HTML i CSS</li>
            <li>Znajomoąść frameworka REACT</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Tagline;
