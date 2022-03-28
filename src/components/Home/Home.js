import React from "react";
import "./Home.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import photo from "../../assets/images/me.jpg";
function Home() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div className="home" name="aboutme">
      <div className="home__container">
        <h3>{isEnglish ? "Who I am?" : "Kim Jestem?"}</h3>
        <div className="home__bottom">
          <div>
            {isEnglish
              ? `I am a self taught beginner front-end developer. I am interested
              in primarily in JavaScript/React. I am familiar with HTML and CSS.
              I have very high enthusiasm for work, passion and ability to learn
              quickly.`
              : `Jestem początkującym front-end developerem samoukiem. Jestem
              zainteresowana przede wszystkim JavaScript/React. Znam HTML i CSS.
              Mam bardzo duży zapał do pracy, pasję i umiejętność szybkiego
              uczenia się.`}
          </div>
          <img src={photo} alt="Agnieszka Kamińska" />
        </div>
      </div>
    </div>
  );
}

export default Home;
