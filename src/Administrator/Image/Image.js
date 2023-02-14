import React, { useState } from "react";
import "./Image.css";

//mui
import CloseIcon from "@mui/icons-material/Close";

function Image({ url }) {
  const [viewImage, setViewImage] = useState(false);

  const onClickImage = () => {
    setViewImage(!viewImage);
  };
  return (
    <div className="image">
      <img
        onClick={onClickImage}
        className="image__img"
        src={url}
        title="Podgląd projektu"
        alt="Podgląd projektu"
      />
      {viewImage ? (
        <div className="image__fullScreen">
          <CloseIcon
            className="image__close"
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

export default Image;
