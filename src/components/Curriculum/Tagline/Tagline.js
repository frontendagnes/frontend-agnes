import React, { useState, useEffect} from "react";
import "./Tagline.css";
import photo from "../../../assets/images/me.jpg";
import { useMediaQuery } from "@mui/material";

function Tagline() {
  const matches = useMediaQuery("(max-width: 885px)");
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if(matches){
      setIsVisible(false)
    }else {
      setIsVisible(true)
    }
  }, [matches])

  const style = {
    visible: {
      visibility: "visible",
      transform: "scaleX(1)",
    },
    hidden: {
      visibility: "hidden",
      transform: "scaleX(0)",
    },
    displayBlock: {
      display: "block",
    },
    displayNone:{
      display: "none",
    },
    ZindexPos:{
      zIndex: 2,
    },
    ZindexNeg:{
      zIndex: -1,
    },
  };

  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="tagline" style={matches ? style.ZindexPos : style.ZindexNeg}>
      <div className="tagline__button" onClick={handleClick} style={matches ? style.displayBlock : style.displayNone}>
        O mnie
      </div>
      <div className="tagline__container" style={isVisible ? style.visible : style.hidden}>
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
