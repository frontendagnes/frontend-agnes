import React from "react";
import "./Project.css";
import { index }from '../assets/utility/functions'
function Project({ icons, title, img, isView, description, id}) {
  const abc = {
    justifyContent: "space-between",
  }
  const cde = {
    justifyContent: "center",
  }
  return (
    <div className="project" >
      <div className="project__top" >
        {icons.map((item) => (
          <span key={index()}>{item}</span>
        ))}
      </div>
      <div className="project__middle">
        <p>{title}</p>
        <img src={img} alt="" />
      </div>
      <div className="project__bottom">
          <div className="project__links" style={isView ? abc : cde}>
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
