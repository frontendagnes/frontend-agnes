import React, { useState } from "react";
import "./Note.css";
import {
  db,
  addDoc,
  collection,
  serverTimestamp,
} from "../../assets/utility/firebase";
import { useStateValue } from "../../assets/utility/StateProvider";
//mui
import { Button, TextField } from "@mui/material";

function Note({ noteId }) {
  const [state, setState] = useState("");
  const [{ alert }, dispatch] = useStateValue();
  const saveNote = async (noteId) => {
    if (state) {
      const ref = collection(db, "questionare", noteId, "notes");
      await addDoc(ref, {
        timestamp: serverTimestamp(),
        note: state,
      })
        .then(() => {
          dispatch({ type: "ALERT_SUCCESS", item: "Notatka dodana porawnie" });
          setState("");
        })
        .catch((error) =>
          dispatch({ type: "ALERT__ERROR", item: error.message })
        );
    } else
      dispatch({
        type: "ALERT__ERROR",
        item: "Pole uwagi jest puste nic nie zostało dodane",
      });
  };
  return (
    <form className="note">
      <div className="note__wrap">
        <div className="note__input">
          <TextField
            className="note__area"
            label="Uwagi"
            value={state}
            onChange={(e) => setState(e.target.value)}
            fullWidth
          />
        </div>
        <Button type="button" onClick={() => saveNote(noteId)} sx={{padding: "10px"}}>
          Zapisz
        </Button>
      </div>
    </form>
  );
}

export default Note;
