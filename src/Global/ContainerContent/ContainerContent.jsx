import React from "react";
import "./ContainerContent.css";
function ContainerContent({ children, name, style, styleCnt }) {
  return (
    <div className="containercontent" style={style}>
      <div className="containercontent__name" style={styleCnt}>{name}</div>
      {children}
    </div>
  );
}

export default ContainerContent;
