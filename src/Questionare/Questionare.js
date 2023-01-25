import React, { useEffect, useState } from "react";
import "./Questionare.css";

import { validate } from "./FormValidation";

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
import AddPhoto from "./AddPhoto/AddPhoto";
//mui
import { Button, TextField } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { styled } from "@mui/material/styles";
//data
import { apiInfo, functionality, otherElements } from "./data.js";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.REACT_APP_SANDGRID_APIKEY);

const FormButton = styled(Button)`
  background-color: #add8e7;
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); // spam detector

  // load image state
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageVisible, setImageVisible] = useState(true);

  const [progressOne, setProgressOne] = useState(0);
  const [imageOne, setImageOne] = useState(null);
  const [previewOne, setPreviewOne] = useState(null);
  const [imageVisibleOne, setImageVisibleOne] = useState(false);

  const [progressTwo, setProgressTwo] = useState(0);
  const [imageTwo, setImageTwo] = useState(null);
  const [previewTwo, setPreviewTwo] = useState(null);
  const [imageVisibleTwo, setImageVisibleTwo] = useState(false);

  const [photos, setPhotos] = useState([]);

  const approvePhoto = (image, progress, preview, setProgress) => {
    if (!image) return;

    const sotrageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
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
              imageUrls: photos,
              hosting: checkedApi,
              functionality: checkedFunctionality,
              elements: checkedElements,
              area: areaField,
              email: email,
              name: name,
            })
              .then(() => {
                dispatch({
                  type: "ALERT_SUCCESS",
                  item: `Ankieta została wysłana. Dziękuję ${
                    name ? name : email
                  }`,
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
            setEmail("");
            setName("");
          })
          .catch((error) => console.log(error.message));
      }
    );
  };

  const sendMail = () => {
    const message = {
      to: email,
      from: "frontendagnes@gmail.com",
      subject: `Witaj ${name} tu frontend-agnes.pl`,
      html: "Twoje zapytanie do frontend-agens.pl zostało wysłane. Postaram się odpowiedzieć jak najszybciej - zwykle w ciągu 24h",
    };

    sgMail
      .send(message)
      .then(() => console.log("Wiadomość została wysłana"))
      .catch((error) => console.log("Send mail", error));
  };
  const formHandler = () => {
    const msg = validate(age, email);
    if (msg) {
      dispatch({ type: "ALERT__ERROR", item: msg });
      return;
    }
    uploadFiles(image);
    // sendMail();
    console.log("mailsender");
    // dispatch({
    //   type: "ALERT_SUCCESS",
    //   item: `Ankieta została wysłana. Dziękuję ${name ? name : email}`,
    // });
  };
  return (
    <div className="questionare">
      <div className="questionare__header">
        <p>
          Strony koduję na podstawie doręczonych przez klienta projektów
          graficznych.
        </p>
        <p>
          Masz projekt a nie potrafisz go zakodować dobrze trafiłeś, zrobię to
          za Ciebie.
        </p>
        <p>
          Jako frontend developer zajmuję się tylko wyglądem projektu, jako bazy
          danych używam <a href="https://firebase.google.com/">firebase</a> -
          tam również „hostinguję” projekty w czasie realizacji do podglądu dla
          klienta.
        </p>
        <p>Wszystkie niezbędne grafiki (zdjęcia) powinien dostarczyć klient.</p>

        <p>
          Na podstawie poniższej ankiety będę w stanie podać Ci cenę usługi,
          podchodzę indywidualnie do każdego projektu – nie wszystkie są takie
          same więc cena jest zależna od oczekiwań klienta.
        </p>
        <p>
          Wycena nie jest zobowiązująca. Nie będą Ci odpowiadać moje warunki po
          prostu zakończymy współprace na tym etapie bez żadnych komplikacji.
        </p>
      </div>
      <form className="questionare__form">
        <QuestionareModule
          api={apiInfo}
          checked={checkedApi}
          setChecked={setCheckedApi}
          description={
            <>
              <p>
                <strong>Hosting</strong> - udostępnienie miejsca na serwerze
                (tam wgrywane są pliki żeby były widoczne w sieci) - przy
                wyborze płatnego hostingu do ceny usługi zostanie doliczona cena
                hostingu
              </p>
              <p>
                <strong>Domena</strong> - adres strony intrenetowej np:{" "}
                <a
                  href="https://frontend-agnes.pl"
                  alt="frontend-agnes.pl"
                  title="Kodowanie stron internetowych"
                >
                  https://frontend-agnes.pl
                </a>{" "}
                - do ceny usuługi zostanie doliczona cena domeny
              </p>
            </>
          }
          legend="Informacja o hostingu i domenie"
        />
        <QuestionareModule
          api={functionality}
          legend="funkcjonalność strony"
          checked={checkedFunctionality}
          setChecked={setCheckedFunctionality}
        />
        <QuestionareModule
          api={otherElements}
          legend="Dodatkowe Elementy"
          checked={checkedElements}
          setChecked={setCheckedElements}
        />
        <div className="questionare__bottom">
          <Fieldset legend="Dodatkowe informacje">
            <textarea
              className="questionare__textarea"
              placeholder="dodatkowe informacje..."
              value={areaField}
              onChange={(e) => setAreaField(e.target.value)}
            />
          </Fieldset>
        </div>
        <div className="questionare__uploadImage uploadImage">
          <Fieldset legend="Dodaj projekt graficzny strony">
            <div className="questionare__wrapper">
              <UploadImage
                progress={progress}
                preview={preview}
                setPreview={setPreview}
                image={image}
                setImage={setImage}
              />
              <div className="questionare__buttonsGroup">
                <div></div>
                <AddPhoto 
                  imageVisible={imageVisibleOne}
                  setImageVisible={setImageVisibleOne}
                  approvePhoto={() => approvePhoto(image, progress, preview, setProgress)}
                  image={image}
                  progress={progress}
                  preview={preview}
                  setProgress={setProgress}
                />
              </div>
            </div>
            {imageVisibleOne ? (
              <div className="questionare__wrapper">
                <UploadImage
                  progress={progressOne}
                  preview={previewOne}
                  setPreview={setPreviewOne}
                  image={imageOne}
                  setImage={setImageOne}
                />
                <div className="questionare__buttonsGroup">
                <AddPhoto 
                  imageVisible={imageVisibleOne}
                  setImageVisible={setImageVisibleOne}
                  approvePhoto={() => approvePhoto(imageOne, progressOne, previewOne, setProgressOne)}
                  image={imageOne}
                  progress={progressOne}
                  preview={previewOne}
                  setProgress={setProgressOne}
                />
                </div>
              </div>
            ) : null}
            {imageVisibleTwo ? (
              <div className="questionare__wrapper">
                <UploadImage
                  progress={progressTwo}
                  preview={previewTwo}
                  setPreview={setPreviewTwo}
                  image={imageTwo}
                  setImage={setImageTwo}
                />
                <div className="questionare__buttonsGroup">
                  <Button
                    type="button"
                    onClick={() =>
                      approvePhoto(
                        imageTwo,
                        progressTwo,
                        previewTwo,
                        setProgressTwo
                      )
                    }
                  >
                    Zatwierdź zdjęcie
                  </Button>
                  <div>
                    <RemoveCircleIcon
                      onClick={() => setImageVisibleTwo(false)}
                      sx={{
                        cursor: "pointer",
                        fontSize: "36px",
                        color: "#ff0000",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </Fieldset>
        </div>
        <div className="questionare__adress">
          <Fieldset legend="Podaj dane do kontaktu">
            <div className="questionare__input">
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Podaj Imię"
                variant="standard"
                fullWidth
              />
            </div>
            <div className="questionare__input">
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Podaj email"
                variant="standard"
                fullWidth
              />
            </div>
          </Fieldset>
        </div>
        <input
          type="text"
          placeholder="age"
          name="age"
          autoComplete="off"
          className="questionare__age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
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
