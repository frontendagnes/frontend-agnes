import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import db, { storage } from "../../assets/utility/firebase";
import { useStateValue } from "../../assets/utility/StateProvider";
import { TextField, LinearProgress } from "@mui/material";

function UploadImage() {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [{ user }] = useStateValue();
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const formHandler = () => {
    uploadFiles(image);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async (url) => {
            await setDoc(doc(db, user?.uid, "photos"), {
              timestamp: new Date(),
              imageUrl: url,
            });
            setProgress(0);
            setImage(null);
          })
          .catch((error) => console.log("err>>", error.message));
      }
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinearProgress
          color="success"
          variant="determinate"
          value={progress}
          style={{ width: "60%", marginBottom: "10px" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField type="file" className="input" onChange={handleChange} />
          <button
            type="button"
            onClick={formHandler}
            style={{ marginLeft: "10px" }}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
