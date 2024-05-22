import React from "react";
import "./ContainerContent.css";
function ContainerContent({ children, name }) {
  return (
    <div className="containercontent">
      <div className="containercontent__name">{name}</div>
      {children}
    </div>
  );
}

export default ContainerContent;
