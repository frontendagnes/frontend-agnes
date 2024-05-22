import React from "react";
import "./social.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";

import { icons } from "./data.js";
import SocialElement from "./SocialElement.jsx";
function SocialMedia() {
  return (
    <div className="socialmedia">
      <div className="socialmedia__left">
        <FontAwesomeIcon icon={faHandPointRight} />
      </div>
      <div className="socialmedia__container">
        {icons.map((item) => (
          <SocialElement
            key={item.id}
            href={item.href}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="socialmedia__right">
        <FontAwesomeIcon icon={faHandPointLeft} />
      </div>
    </div>
  );
}

export default SocialMedia;
