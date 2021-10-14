import React from "react";
import "./Home.css";

import photo from '../../assets/me.jpg'
function Home() {
  return (
    <div className="home" id="aboutme">
      <div className="home__container">
        <h3>Kim Jestem?</h3>
        <div className="home__bottom">
          <div>
            Jestem początkującym front-end developerem. Jestem zainteresowana
            przede wszystkim JavaScript/React. Znam HTML i CSS. Mam bardzo duży
            zapał do pracy, pasję i umiejętność szybkiego uczenia się.
          </div>
          <img src={photo} alt="Agnieszka Kamińska" />
        </div>
      </div>
    </div>
  );
}

export default Home;
