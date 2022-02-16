import React from "react";
import "./ContainerCvs.css";
function ContainerCvs({ children }) {
  return (
    <div className="containercvs">
      <div className="containercvs__wrapper" id="printToPdf">{children}</div>
    </div>
  );
}

export default ContainerCvs;
