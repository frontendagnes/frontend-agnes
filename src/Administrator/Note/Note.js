import React, { useState } from "react";
import "./Note.css";
import {
  db,
  doc,
  setDoc,
} from "../../assets/utility/firebase";
//mui
import { Button } from "@mui/material";

function Note({ noteId }) {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [note, setNote] = useState([]);

  const saveNote = async (noteId) => {
    const ref = doc(db, "questionare", noteId);
    await setDoc(
      ref,
      {
        note: note,
      },
      { merge: true }
    )
      .then(() => console.log("Notatka ok"))
      .catch((error) => console.log("err>>", error));
  };
  return (
    <form className="note">
      <div className="note__wrap">
        <textarea
          className="note__area"
          placeholder="Uwagi"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Button type="button" onClick={() => saveNote(noteId)}>
          Zapisz
        </Button>
      </div>
    </form>
  );
}

export default Note;
