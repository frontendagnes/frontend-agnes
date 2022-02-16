import React from "react";
import "./ContainerPrint.css";
function ContainerPrint({ children, title  }) {
  return (
    <div className="containerprint">
        <div className="containerprint__title">{title}</div>
        {children}
    </div>
  );
}

export default ContainerPrint;
