import React, { useState, useRef, useEffect } from "react";
import "./AdminDetails.css";

import {
  db,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "../../assets/utility/firebase";
import { useStateValue } from "../../assets/utility/StateProvider";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useReactToPrint } from "react-to-print";
//componets
import Details from "../Details/Details";
import Note from "../Note/Note";
import Fieldset from "../../Questionare/Fieldset/Fieldset";
//mui
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function AdminDetails() {
  const [notes, setNotes] = useState([]);
  const [{ adminData }, dispatch] = useStateValue();

  let { questionareId } = useParams();

  useEffect(() => {
    const ref = collection(db, "questionare", questionareId, "notes");
    const sortRef = query(ref, orderBy("timestamp", "desc"));
    const unsb = onSnapshot(sortRef, (snap) => {
      setNotes(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsb();
    };
  }, []);

  const deleteNote = async (idNote) => {
    const ref = doc(db, "questionare", questionareId, "notes", idNote);
    await deleteDoc(ref)
      .then(() =>
        dispatch({
          type: "ALERT_SUCCESS",
          item: "Notatka została poprawnie usunięta",
        })
      )
      .catch((error) =>
        dispatch({ type: "ALERT__ERROR", item: error.message })
      );
  };
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
    "details__image": !isClicked,
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
            <h2>Szczegóły projektu</h2>
            <Fieldset legend="Informacje o projekcie">
            <div className="details__row">
              <span className="details__title">Data zgłoszenia:</span>
              <span className="details__content">
                {new Date(item.data.timestamp.seconds * 1000).toLocaleString(
                  "pl-PL"
                )}
              </span>
            </div>
            <Details data={item.data.hosting} title="Hosting i Domena:" />
            <Details
              data={item.data.functionality}
              title="Funkcjonalność strony:"
            />
            <Details data={item.data.elements} title="Dodatkowe elementy: " />
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
            </Fieldset>
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
            <Note noteId={item.id} />
            <ul className="admindetails__notes">
              {notes?.map((note) => (
                <li key={note.id}>
                  <span>
                    {new Date(
                      note.data.timestamp?.seconds * 1000
                    ).toLocaleString("pl-PL")}
                  </span>
                  <div>
                    <span>{note.data.note}</span>
                    <RemoveCircleIcon
                      sx={{ cursor: "pointer" }}
                      titleAccess="Usuń Notatkę"
                      color="error"
                      fontSize="large"
                      onClick={() => deleteNote(note.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default AdminDetails;
