import React from "react";
import "./Tagline.css";
import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";

function Tagline({ name, job, email, phone, skills, isFull, myCv, photo }) {
  const [{ file }] = useStateValue();
  return (
    <div className="tagline" style={{ width: isFull ? "100%" : "25%" }}>
      <div className="tagline__container">
        <div className="tagline__top">
          <div className="tagline__profession">{job}</div>
          {myCv ? (
            <img src={photo} alt={name} title={name} />
          ) : (
            file ?
            <img
              src={file}
              alt={name}
              title={name}
            />
            : null
          )}
        </div>
        <div className="tagline__bottom">
          <div className="tagline__personal">
            <div className="tagline__title">Dane Osobowe:</div>
            <ul>
              <li>
                <span>E-mail:</span>
                {email}
              </li>
              <li>
                <span>Numer telefonu</span>
                {phone}
              </li>
            </ul>
          </div>
          <div className="tagline__skills">
            <div className="tagline__title">Umiejętności:</div>
            <ul>
              {skills?.map((skill) => (
                <li key={index()}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tagline;
