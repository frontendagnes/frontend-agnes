import React, { useState, useEffect, useRef } from "react";
import "./Upload.css";
//api
import {
  getDownloadURL,
  uploadBytesResumable,
  storage,
  ref,
} from "../../assets/utility/firebase";

import { useStateValue } from "../../assets/utility/StateProvider";
//mui
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//componetns
import AddPhotoButton from "../../Questionare/AddPhotoButton/AddPhotoButton";
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function Upload({ setPhotos, photos }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);

  const [{ alert }, dispatch] = useStateValue();
  const fileImgRef = useRef();
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
  }, [image, preview]);

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
  const uploadFile = () => {
    if (!image) {
      dispatch({
        type: "ALERT__ERROR",
        item: `Żadne zdjęcie nie zostało dodane!`,
      });
      return;
    }
    // if (!image) return;
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => console.log("Error Photo", error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async (url) => {
            setPhotos([...photos, url]);
          })
          .then(() => {
            setImage(null);
            setPreview(null);
            setProgress(0);
            console.log("PH", photos);
          })
          .catch((error) => console.log("Send Photo Error", error));
      }
    );
  };
  const formHandler = () => {
    uploadFile(image);
  };

  const handleRemove = () => {
    setImage(null);
    setPreview(null);
    setProgress(0);
  };
  return (
    <div className="upload">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {preview ? (
          <>
            <Stack
              sx={{
                width: "80%",
                color: "grey.500",
                marginTop: "20px",
                display: "flex",
              }}
              spacing={1}
            >
              <LinearProgressWithLabel
                variant="determinate"
                value={progress}
                color="secondary"
                width="100%"
              />
            </Stack>
            <div style={{ display: "flex" }}>
              <img
                src={preview}
                style={{ width: "150px", cursor: "pointer" }}
                alt=""
                onClick={handleClick}
                title="Zmień obraz"
              />
              <DeleteForeverIcon
                onClick={handleRemove}
                titleAccess="Usuń"
                sx={{
                  color: "red",
                  fontSize: "32px",
                  cursor: "pointer",
                  marginLeft: "-30px",
                  padding: "3px 5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                }}
              />
            </div>
          </>
        ) : (
          <AddPhotoAlternateIcon
            onClick={handleClick}
            sx={{ fontSize: "65px", color: "grey", cursor: "pointer" }}
          />
        )}

        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          ref={fileImgRef}
          style={{ display: "none" }}
        />
        <AddPhotoButton
          image={image}
          progress={progress}
          preview={preview}
          setProgress={setProgress}
          approvePhoto={formHandler}
        />

        {photos.length > 0 ? (
          <div>W razie potrzeby dodaj kolejne zdjęcie</div>
        ) : null}

        <div
          className="upload__gallery"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photos.length > 0
            ? photos.map((item, index) => (
                <img
                  width="100px"
                  height="100%"
                  src={item}
                  title={`Obraz nr ${index + 1}`}
                  alt={`Obraz nr ${index + 1}`}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Upload;
