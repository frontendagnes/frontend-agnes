import React from "react";
import "./Project.css";
function Project({ icons, iconColor, title, img, isView, description}) {
  return (
    <div className="project">
      <div className="project__top" style={{ color: iconColor }}>
        {icons.map((item) => (
          <span>{item}</span>
        ))}
      </div>
      <div className="project__middle">
        {title}
        <img src={img} alt="" />
      </div>
      <div className="project__bottom">
          <div className="project__links">
            <div>
               <span className="project__code"> &lt;</span> <span className="project__tag">View Code</span><span className="project__code">  /&gt; </span>
            </div>
              {isView && 
            <div>
                <span className="project__code"> &lt;</span> <span className="project__tag">Live</span><span className="project__code">  /&gt; </span>
            </div>}
          </div>
          <div className="project__description">
              {description}
          </div>
      </div>
    </div>
  );
}

export default Project;
