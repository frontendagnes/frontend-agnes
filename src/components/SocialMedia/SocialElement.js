import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SocialElement({ href, title, icon }) {
  return (
    <div className="socialElement">
      <a href={href} title={title} alt={title}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
  );
}

export default SocialElement;
