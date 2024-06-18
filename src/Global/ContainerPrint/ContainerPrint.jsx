import React from "react";
import "./ContainerPrint.css";
function ContainerPrint({ children, title, style }) {
  return (
    <div className="containerprint" style={style}>
        <div className="containerprint__title">{title}</div>
        {children}
    </div>
  );
}

export default ContainerPrint;
