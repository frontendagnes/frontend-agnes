import React from "react";
import "./ClientInfo.css";

//components
import Fieldset from "../../Questionare/Fieldset/Fieldset";

function ClientInfo({ item }) {
  return (
    <Fieldset legend="Informacje o kliencie">
      <div className="details__row">
        <span className="details__title">Nazwa:</span>
        <span className="details__content">{item.data.name}</span>
      </div>
      <div className="details__row">
        <span className="details__title">email:</span>
        <span className="details__content">{item.data.email}</span>
      </div>
    </Fieldset>
  );
}

export default ClientInfo;
