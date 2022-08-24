import React, { useRef, useEffect } from "react";
import "./UploadImage.css";
//mui
import { LinearProgress } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
function UploadImage({ progress, preview, setPreview, setImage, image }) {
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }

  }, [image, setPreview]);

  const fileImgRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    fileImgRef.current.click();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };
  return (
    <div className="uploadImage">
      <LinearProgress
        color="success"
        variant="determinate"
        value={progress}
        sx={{ height: "10px", borderRadius: "999px" }}
      />
      <div className="uploadImage__inputs">
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          ref={fileImgRef}
          style={{ display: "none" }}
        />

        <div className="uploadImage__image" onClick={handleClick}>
          <AddAPhotoIcon sx={{ fontSize: "52px" }} />
        </div>
        {preview ? (
          <div className="uploadImage__preview">
            <img src={preview} alt="Podgląd projektu" title="Podgląd" />
            <DeleteIcon
              fontSize="large"
              color="error"
              sx={{ cursor: "pointer" }}
              onClick={() => setPreview(null)}
              titleAccess="Wyczyść Podgląd"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UploadImage;
