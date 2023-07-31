import React, { useState, useEffect, useRef } from "react";
import "./Upload.css";
//api
import {
  getDownloadURL,
  uploadBytesResumable,
  storage,
  ref,
} from "../../assets/utility/firebase";
//mui
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//componetns
import AddPhotoButton from "../../Questionare/AddPhotoButton/AddPhotoButton";
function Upload({ setPhotos, photos }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
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
    // if (!image) {
    //   dispatch({
    //     type: "ALERT__ERROR",
    //     item: `Żadne zdjęcie nie zostało dodane!`,
    //   });
    //   return;
    // }
    if (!image) return;
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
          gap: "20px",
        }}
      >
        {preview ? (
          <>
            <div className="upload__progress">
              <progress value={progress} style={{ color: "green" }} />
              {progress}%
            </div>
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
                  fontSize:"32px",
                  cursor: "pointer",
                  marginLeft: "-30px",
                  padding: "3px 5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px"
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
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexDirection: "column",
          gap: "10px",
        }}
      >
        <button type="button" onClick={formHandler} style={{padding: "10px 20px"}}>
          Wyślji
        </button>
      </div> */}
    </div>
  );
}

export default Upload;
