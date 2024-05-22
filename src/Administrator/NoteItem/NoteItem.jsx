import React from "react";
import "./NoteItem.css";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function NoteItem({ note, deleteNote }) {
  return (
    <li key={note.id}>
      <span>
        {new Date(note.data.timestamp?.seconds * 1000).toLocaleString("pl-PL")}
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
  );
}

export default NoteItem;
