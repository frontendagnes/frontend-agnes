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
import { useReactToPrint } from "react-to-print";
//componets
import Details from "../Details/Details";
import Note from "../Note/Note";
import NoteItem from "../NoteItem/NoteItem";
import Fieldset from "../../Questionare/Fieldset/Fieldset";
import ImageZoom from "../../Global/ImageZoom/ImageZoom"
import ClientInfo from "../ClientInfo/ClientInfo";
//mui
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";

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
              <div className="details__row">
                <span className="details__title">Zdjęcia:</span>
                {item.data.imageUrls
                  ? item.data.imageUrls.map((item, index) => (
                      <span className="details__content" key={item}>
                        <ImageZoom url={item} />
                      </span>
                    ))
                  : null}
              </div>
            </Fieldset>
            <ClientInfo item={item} />
            <Note noteId={item.id} />
            <ul className="admindetails__notes">
              {notes?.map((note) => (
                <NoteItem note={note} deleteNote={deleteNote} />
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default AdminDetails;
