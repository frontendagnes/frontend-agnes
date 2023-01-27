import React from "react";
import "./AddPhotoButton.css";
// mui
import { Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";


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
          onClick={() => approvePhoto(image, progress, preview, setProgress)}
        >
          Zatwierdź
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
