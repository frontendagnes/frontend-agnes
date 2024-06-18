import React from "react";
import "./Taglinev1.css";
import { useStateValue } from "../../../assets/utility/StateProvider";
//mui
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

function TaglineV1({ name, job, email, phone, myCv, photo }) {
  const [{ file }] = useStateValue();
  return (
    <div className="tagline">
      <div className="tagline__image">
        {myCv ? (
          <img src={photo} alt={name} title={name} />
        ) : file ? (
          <img src={file} alt={name} title={name} />
        ) : null}
      </div>
      <div className="tagline__description">
        {myCv ? (
          <div className="tagline__name">inż. Agnieszka Kamińska</div>
        ) : (
          <div className="tagline__name">{name}</div>
        )}
        <div className="tagline__profession">{job}</div>
        <div className="tagline__personal">
          <ul>
            <li>
              <span>
                <MailIcon />
                {email}
              </span>
            </li>
            <li>
              <span>
                <PhoneIcon />
                {phone}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaglineV1;
