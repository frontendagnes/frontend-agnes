import React, { useState } from "react";
import "./ImageZoom.css"

//mui
import CloseIcon from "@mui/icons-material/Close";

function ImageZoom({ url }) {
  const [viewImage, setViewImage] = useState(false);

  const onClickImage = () => {
    setViewImage(!viewImage);
  };
  return (
    <div className="imageZoom">
      <img
        onClick={onClickImage}
        className="imageZoom__img"
        src={url}
        title="Podgląd projektu"
        alt="Podgląd projektu"
      />
      {viewImage ? (
        <div className="imageZoom__fullScreen">
          <CloseIcon
            className="imageZoom__close"
            onClick={onClickImage}
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
          <img src={url} />
        </div>
      ) : null}
    </div>
  );
}

export default ImageZoom;
