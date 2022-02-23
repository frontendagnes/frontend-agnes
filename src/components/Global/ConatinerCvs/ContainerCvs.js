import React from "react";
import "./ContainerCvs.css";

function ContainerCvs({ children, identifier }) {
  return (
    <div className="containercvs">
      <div className="containercvs__wrapper" id={identifier}>
        {children}
        </div>
    </div>
  );
}

export default ContainerCvs;
