import React from "react";
import "./AddPhoto.css";
// mui
import { Button, TextField } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { styled } from "@mui/material/styles";

function AddPhoto({
  imageVisible,
  setImageVisible,
  imageVivibleR,
  setImageVisibleR,
  approvePhoto,
  image,
  progress,
  preview,
  setProgress,
}) {
  return (
    <div className="addPhoto">
      {!imageVisible ? (
        <AddToPhotosIcon
          onClick={() => setImageVisible(true)}
          sx={{
            cursor: "pointer",
            fontSize: "36px",
            color: "#008000",
          }}
          titleAccess="Dodaj zdjęcie"
        />
      ) : null}
      <RemoveCircleIcon
        onClick={() => setImageVisible(false)}
        sx={{
          cursor: "pointer",
          fontSize: "36px",
          color: "#ff0000",
        }}
      />
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

export default AddPhoto;
