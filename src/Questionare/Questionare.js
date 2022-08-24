import React, { useState } from "react";
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
//mui
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
//data
import { apiInfo, functionality, otherElements } from "./data.js";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.REACT_APP_SANDGRID_APIKEY);

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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); // spam detector

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
      .catch((error) => console.log("Sent mail", error));
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
            <UploadImage
              progress={progress}
              preview={preview}
              setPreview={setPreview}
              image={image}
              setImage={setImage}
            />
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
