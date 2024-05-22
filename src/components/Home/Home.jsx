import React from "react";
import "./Home.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import photo from "../../assets/images/me.jpg";
import Title from "../../Global/Title/Title";
function Home() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div className="home" name="aboutme">
      <div className="home__container">
        <Title polish="Kim Jestem" english="Who I am" />
        <div className="home__bottom">
          <div>
            {isEnglish
              ? `I am a self taught front-end developer. I am interested
              in primarily in JavaScript/React. I am familiar with HTML and CSS.
              I have very high enthusiasm for work, passion and ability to learn
              quickly.`
              : `Jestem front-end developerem samoukiem. Jestem
              zainteresowana przede wszystkim JavaScript/React. Znam HTML i CSS.
              Mam bardzo duży zapał do pracy, pasję i umiejętność szybkiego
              uczenia się.`}
          </div>
          <img
            src={photo}
            alt="Agnieszka Kamińska"
            name="My Photo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
