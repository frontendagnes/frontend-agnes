import React from "react";
import "./Home.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import photo from "../../assets/images/me.jpg";
function Home() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div className="home" id="aboutme">
      {!isEnglish ? (
        <div className="home__container">
          <h3>Kim Jestem?</h3>
          <div className="home__bottom">
            <div>
              Jestem początkującym front-end developerem samoukiem. Jestem
              zainteresowana przede wszystkim JavaScript/React. Znam HTML i CSS.
              Mam bardzo duży zapał do pracy, pasję i umiejętność szybkiego
              uczenia się.
            </div>
            <img src={photo} alt="Agnieszka Kamińska" />
          </div>
        </div>
      ) : (
        <div className="home__container">
          <h3>Who I am?</h3>
          <div className="home__bottom">
            <div>
              I am a self taught beginner front-end developer. I am interested
              in primarily in JavaScript/React. I am familiar with HTML and CSS.
              I have very high enthusiasm for work, passion and ability to learn
              quickly.
            </div>
            <img src={photo} alt="Agnieszka Kamińska" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
