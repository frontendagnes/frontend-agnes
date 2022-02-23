import React, { useRef, useState, useEffect } from "react";
import "./Tagline.css";
import { index } from "../../../assets/utility/functions";
import { useStateValue } from "../../../assets/utility/StateProvider";

function Tagline({ name, job, email, phone, skills, isFull, myCv, photo }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();
  const [{ isPhoto }] = useStateValue();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  return (
    <div className="tagline" style={{ width: isFull ? "100%" : "25%" }}>
      <div className="tagline__container">
        <div className="tagline__top">
          <div className="tagline__profession">{job}</div>
          {myCv ? (
            <img src={photo} alt={name} title={name} />
          ) : isPhoto ? (
            <div className="taglline__iamge">
              <input
                type="file"
                onChange={handleChange}
                style={{ display: "none" }}
                ref={fileInputRef}
                accept="image/*"
              />
              {preview ? (
                <img
                  src={preview}
                  alt={name}
                  title={name}
                  onClick={handleClick}
                />
              ) : (
                <button onClick={handleClick}>Add Image</button>
              )}
            </div>
          ) : null}
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
            <div className="tagline__title">Umiejętności: </div>
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
