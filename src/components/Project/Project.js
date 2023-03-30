import React from "react";
import "./Project.css";
import { index } from "../../assets/utility/functions";
import { Link } from "react-router-dom";
function Project({
  icons,
  title,
  img,
  isView,
  description,
  url,
  viewCode,
  live,
}) {
  return (
    <div className="project">
      <div className="project__top">
        <div>
          {icons.map((item) => (
            <span key={index()}>{item}</span>
          ))}
        </div>
        <p>{title}</p>
      </div>
      <div className="project__middle">
        <Link to={url} name={url}>
          <img src={img} alt={url} name="contact" className="project__image" loading="lazy"/>
        </Link>
      </div>
      <div className="project__bottom">
        {isView ? (
          <div className="project__links project__alignJustify">
            <a href={viewCode} alt="" name="View Code">
              <span className="project__code"> &lt; </span>
              <span className="project__tag"> &nbsp; View Code &nbsp; </span>
              <span className="project__code"> /&gt; </span>
            </a>
            <a href={live} alt="" name="Live">
              <span className="project__code"> &lt; </span>
              <span className="project__tag"> &nbsp; Live &nbsp; </span>
              <span className="project__code"> /&gt; </span>
            </a>
          </div>
        ) : (
          <Link to={url} name={url}>
            <div className="project__links project__hover project__alignCenter">
              <span className="project__code"> &lt; </span>
              <span className="project__tag"> &nbsp; View &nbsp;</span>
              <span className="project__code"> /&gt; </span>
            </div>
          </Link>
        )}
        <div className="project__description">{description}</div>
      </div>
    </div>
  );
}

export default Project;
