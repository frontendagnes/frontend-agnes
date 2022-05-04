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
    <div className="contact" >
      <div className="contact__left">
        <p>Agnieszka Kamińska</p>
        <p>
          <a href="mailto:zabula81@o2.pl">zabula81@o2.pl</a>
        </p>
      </div>
      <div className="contact_right">
        <FontAwesomeIcon icon={faHtml5} title="html5"/>
        <FontAwesomeIcon icon={faCss3Alt} title="css3"/>
        <FontAwesomeIcon icon={faJsSquare} title="javascript"/>
        <FontAwesomeIcon icon={faReact} title="react"/>
        <FontAwesomeIcon icon={faGithubSquare} title="github"/>
      </div>
    </div>
  );
}

export default Contact;
