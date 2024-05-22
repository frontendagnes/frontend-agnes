import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__left">
        <p>Agnieszka Kamińska</p>
        <p>
          <a href="mailto:frontendagnes@gmail.com">frontendagnes@gmail.com</a>
        </p>
      </div>
      <div className="contact_right">
        <FontAwesomeIcon icon={faHtml5} title="html5" />
        <FontAwesomeIcon icon={faCss3Alt} title="css3" />
        <FontAwesomeIcon icon={faJsSquare} title="javascript" />
        <FontAwesomeIcon icon={faReact} title="react" />
        <FontAwesomeIcon icon={faGithubSquare} title="github" />
      </div>
    </div>
  );
}

export default Contact;
