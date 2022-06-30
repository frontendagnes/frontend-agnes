import React, { useState } from "react";
import "./Questionare.css";

import { useStateValue } from "../assets/utility/StateProvider";
import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDownloadURL,
  uploadBytesResumable,
  storage,
  ref,
} from "../assets/utility/firebase.js";
//components
import QuestionareModule from "./QuestionareModule/QuestionareModule";
import Fieldset from "./Fieldset/Fieldset";
import UploadImage from "./UploadImage/UploadImage";
//mui
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
//data
import { apiInfo, functionality, otherElements } from "./data.js";

const FormButton = styled(Button)`
  background-color: #add8e6;
  color: #000000;
  font-size: 1.2rem;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

function Questionare() {
  //global state
  const [{ alert }, dispatch] = useStateValue();

  // aplication state
  const [checkedApi, setCheckedApi] = useState([]);
  const [checkedFunctionality, setCheckedFunctionality] = useState([]);
  const [checkedElements, setCheckedElements] = useState([]);
  const [areaField, setAreaField] = useState("");

  // load image state
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const uploadFiles = (file) => {
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
      (error) => console.log("snap>>", error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async (url) => {
            await addDoc(collection(db, "questionare"), {
              timestamp: serverTimestamp(),
              imageUrl: url,
              hosting: checkedApi,
              functionality: checkedFunctionality,
              elements: checkedElements,
              area: areaField,
            })
              .then(() => {
                dispatch({
                  type: "ALERT_SUCCESS",
                  item: "Projekt został dodany poprawnie",
                });
              })
              .catch((error) =>
                dispatch({
                  type: "ALERT__ERROR",
                  item: error.message,
                })
              );
            setProgress(0);
            setImage(null);
            // setCheckedApi([])
            // setCheckedFunctionality([])
            // setCheckedElements([])
            setAreaField("");
          })
          .catch((error) => console.log(error.message));
      }
    );
  };

  const formHandler = () => {
    uploadFiles(image);
  };
  return (
    <div className="questionare">
      <form className="questionare__form">
        <QuestionareModule
          api={apiInfo}
          checked={checkedApi}
          setChecked={setCheckedApi}
          description={
            <>
              <p>
                <strong>Hosting</strong> - udostępnienie miejsca na serwerze
                (tam wgrywane są pliki żeby były widoczne w sieci)
              </p>
              <p>
                <strong>Domena</strong> - adres strony intrenetowej np:{" "}
                <a
                  href="https://frontend-agnes.pl"
                  alt="frontend-agnes.pl"
                  title="Kodowanie stron internetowych"
                >
                  https://frontend-agnes.pl
                </a>
              </p>
            </>
          }
          legend="Informacja o hostingu i domenie"
        />
        {checkedApi.map((item) => (
          <div>{item}</div>
        ))}
        <QuestionareModule
          api={functionality}
          legend="funkcjonalność strony"
          checked={checkedFunctionality}
          setChecked={setCheckedFunctionality}
        />
        {checkedFunctionality.map((item) => (
          <div>{item}</div>
        ))}
        <QuestionareModule
          api={otherElements}
          legend="Dodatkowe Elementy"
          checked={checkedElements}
          setChecked={setCheckedElements}
        />
        {checkedElements.map((item) => (
          <div>{item}</div>
        ))}

        <div className="questionare__bottom">
          <Fieldset legend="Dodatkowe informacje">
            <textarea
              className="questionare__textarea"
              placeholder="dodatkowe informacje..."
              value={areaField}
              onChange={(e) => setAreaField(e.target.value)}
            />
          </Fieldset>
          <p>{areaField}</p>
        </div>
        <div className="questionare__uploadImage uploadImage">
          <Fieldset legend="Dodaj projekt graficzny strony">
            <UploadImage
              progress={progress}
              preview={preview}
              setPreview={setPreview}
              image={image}
              setImage={setImage}
            />
          </Fieldset>
        </div>
        <div className="questionere__button">
          <FormButton type="button" onClick={formHandler}>
            Wyślij
          </FormButton>
        </div>
      </form>
    </div>
  );
}

export default Questionare;
