import React, { useState } from "react";
import "./Project.css";
import { index } from "../../assets/utility/functions";
import { Link } from 'react-router-dom'
import classNames from 'classnames';
function Project({ icons, title, img, isView, description, url, viewCode, live }) {
  const styles = {
    alignJustify:{
      justifyContent: "space-around",
    },
    alignCenter:{
      justifyContent: "center",
    },
  }

  const [isClicked, setIsClicked] = useState(false)
  const clickedImage = () => {
    setIsClicked(!isClicked)
  }
  const classValue = classNames({
    'project__image': !isClicked,
    'project__image--clicked': isClicked
  })

  return (
    <div className="project">
      <div className="project__top">
        {icons.map((item) => (
          <span key={index()}>{item}</span>
        ))}
      </div>
      <div className="project__middle">
        <p>{title}</p>
        <img src={img} alt="" name="contact" className={classValue} onClick={clickedImage} />
      </div>
      <div className="project__bottom">
        {isView ? (
          <div className="project__links" style={styles.alignJustify}>
            <a href={viewCode} alt="">
              <span className="project__code"> &lt; </span>
              <span className="project__tag"> &nbsp; View Code &nbsp; </span>
              <span className="project__code"> /&gt; </span>
            </a>
            <a href={live} alt="">
              <span className="project__code"> &lt; </span>
              <span className="project__tag"> &nbsp; Live &nbsp; </span>
              <span className="project__code"> /&gt; </span>
            </a>
          </div>
        ) : (
          <Link to={url}>
          <div className="project__links project__hover" style={styles.alignCenter}>
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
