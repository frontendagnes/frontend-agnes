import React from "react";
import "./AddPhotoButton.css";
// mui
import { Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import SendIcon from "@mui/icons-material/Send";

function AddPhotoButton({
  approvePhoto,
  image,
  progress,
  preview,
  setProgress,
}) {
  return (
    <div className="addPhotoButton">
      {progress < 100 ? (
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="secondary"
          size="small"
          onClick={() => approvePhoto(image, progress, preview, setProgress)}
        >
          Wyślij
        </Button>
      ) : (
        <DoneIcon
          sx={{
            fontSize: "36px",
            color: "#008000",
          }}
        />
      )}
    </div>
  );
}

export default AddPhotoButton;
