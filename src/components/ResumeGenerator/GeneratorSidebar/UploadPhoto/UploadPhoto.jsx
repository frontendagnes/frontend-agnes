import React, { useEffect, useState, useRef } from "react";
import "./UploadPhoto.css"

import { useStateValue } from "../../../../assets/utility/StateProvider";
//mui
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
function UploadPhoto({ name }) {
  const [image, setImage] = useState(null);
  const [{ file }, dispatch] = useStateValue();
  const fileInputRef = useRef();
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({ type: "SET_PREVIEW", item: reader.result });
      };
      reader.readAsDataURL(image);
    } else {
      dispatch({ type: "DELETE_PREVIEW" });
    }
  }, [image, dispatch]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  return (
    <div className="uploadPhoto">
      {!file ? <b>Tutaj możesz wybrać zdjęcie do CV (opcjonalne)</b> : null}
      <input
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
      />
      {file ? (
        <>
          <div className="uploadPhoto__avatar">
            <div>
              <DeleteForeverIcon
                onClick={() => setImage(null)}
                fontSize="large"
                sx={{ color: "red", cursor: "pointer" }}
                titleAccess="Usuń zdjęcie"
              />
            </div>
            <img src={file} alt={name} title={name} onClick={handleClick} />
          </div>
          <b>Klikając na zdjęcie możesz je zmienić</b>
        </>
      ) : (
        <div className="uploadPhoto__addButton" onClick={handleClick}>
          <AddAPhotoIcon fontSize="large" />
        </div>
      )}
    </div>
  );
}

export default UploadPhoto;
