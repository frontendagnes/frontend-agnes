import React, {forwardRef} from "react";
import "./ContainerCvs.css";

function ContainerCvs(props, ref ) {
  return (
    <div className="containercvs">
      <div className="containercvs__wrapper" id={props.identifier} ref={ref}>
        {props.children}
      </div>
    </div>
  );
}

export default forwardRef(ContainerCvs);
