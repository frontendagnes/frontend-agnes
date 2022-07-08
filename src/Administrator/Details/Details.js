import React from "react";
import "./Details.css";

function Details({ data, title }) {
  return (
    <div className="details__row">
      <span className="details__title">{title}</span>
      <span className="details__content">
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </span>
    </div>
  );
}

export default Details;
