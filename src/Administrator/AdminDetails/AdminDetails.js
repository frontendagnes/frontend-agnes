import React, { useState, useRef } from "react";
import "./AdminDetails.css";

import { useStateValue } from "../../assets/utility/StateProvider";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useReactToPrint } from "react-to-print";
//componets
import Details from "../Details/Details";
import Note from "../Note/Note";
//mui
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";
function AdminDetails() {
  const [{ adminData }] = useStateValue();

  let { questionareId } = useParams();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/admin");
  };

  const printDetails = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => printDetails.current,
    documentTitle: "details-pricing",
  });

  const [isClicked, setIsClicked] = useState(false);
  const classImage = classNames({
    details__image: !isClicked,
    "details__image--clicked": isClicked,
  });

  return (
    <div className="admindetails details">
      <Button type="button" onClick={handleNavigate}>
        <ArrowBackIcon /> Wróć
      </Button>
      <Button type="button" onClick={handlePrint}>
        <PrintIcon sx={{ marginRight: "5px" }} /> Drukuj
      </Button>
      {adminData
        .filter((item) => item.id === questionareId)
        .map((item) => (
          <div key={item.id} className="details__wrapper" ref={printDetails}>
            <style type="text/css" media="print">
              {
                "\
                  @page { size: landscape; }\
                  "
              }
            </style>
            <h2>Szczegóły projektu</h2>
            <div className="details__row">
              <span className="details__title">Data zgłoszenia:</span>
              <span className="details__content">
                {new Date(
                  item.data.timestamp.seconds * 1000
                ).toLocaleDateString("pl-PL")}r
              </span>
            </div>
            <Details
              data={item.data.hosting}
              title="Hosting i Domena:"
            />
            <Details
              data={item.data.functionality}
              title="Funkcjonalność strony:"
            />
            <Details
              data={item.data.elements}
              title="Dodatkowe elementy: "
            />
            <div className="details__row">
              <span className="details__title">Dodatkowe Uwagi:</span>
              <span className="details__content">{item.data.area}</span>
            </div>
            {item.data.imageUrl ? (
              <div className="details__row">
                <span className="details__title">Zdjęcie projektu:</span>
                <span className="details__content">
                  <img
                    onClick={() => setIsClicked(!isClicked)}
                    className={classImage}
                    src={item.data?.imageUrl}
                    title="Podgląd projektu"
                    alt="Podgląd projektu"
                  />
                </span>
              </div>
            ) : null}
            <Note noteId={item.id} />
            <ul className="admindetails__notes">
              {item.data.note?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default AdminDetails;
