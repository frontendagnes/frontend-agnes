import React from "react";
import "./Taglinev2.css";
import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";
//mui
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
function TaglineV2({ name, job, email, phone, skills, myCv, photo }) {
  const [{ file }] = useStateValue();
  return (
    <div className="taglinev2">
      <div className="taglinev2__top">
        <div className="taglinev2__profession">{job}</div>
        {myCv ? (
          <img src={photo} alt={name} title={name} />
        ) : file ? (
          <img src={file} alt={name} title={name} />
        ) : null}
      </div>
      <div className="taglinev2__bottom">
        <div className="taglinev2__personal">
          <div className="taglinev2__title">Dane Osobowe:</div>
          <ul>
            <li>
              <MailIcon />
              {email}
            </li>
            <li>
              <PhoneIcon />
              {phone}
            </li>
          </ul>
        </div>
        <div className="taglinev2__skills">
          <div className="taglinev2__title">Umiejętności:</div>
          <ul>
            {skills?.map((skill) => (
              <li key={index()}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaglineV2;
