import React, { useState } from "react";
import "./Questionare.css";

import { useNavigate } from "react-router-dom";

import { validate } from "./FormValidation.jsx";

import { useStateValue } from "../assets/utility/StateProvider.jsx";
import {
  addDoc,
  collection,
  db,
  serverTimestamp,
} from "../assets/utility/firebase.jsx";
//components
import ButtonBack from "../Global/ButtonBack/ButtonBack.jsx";
import ImageZoom from "../Global/ImageZoom/ImageZoom.jsx";
import Upload from "../Global/Upload/Upload.jsx";
import Fieldset from "./Fieldset/Fieldset.jsx";
import QuestionareModule from "./QuestionareModule/QuestionareModule.jsx";
//img
import aPhoto from "../assets/images/open-graph.jpg";
//mui
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
//data
import { apiInfo, functionality, otherElements } from "./data.js";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);


function Questionare() {
  //global state
  const [{ isEnglish }, dispatch] = useStateValue();

  // aplication state
  const [checkedApi, setCheckedApi] = useState([]);
  const [checkedFunctionality, setCheckedFunctionality] = useState([]);
  const [checkedElements, setCheckedElements] = useState([]);
  const [areaField, setAreaField] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); // spam detector

  const [photos, setPhotos] = useState([]);
  const history = useNavigate();

  // const sendMail = async ({ subject, text, email }) => {
  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: import.meta.env.VITE_APP_AUTH_MAIL,
  //       pass: import.meta.env.VITE_APP_AUTH_PASS,
  //     },
  //   });

  //   const mailOptions = {
  //     from: import.meta.env.VITE_APP_AUTH_MAIL,
  //     to: email,
  //     subject: subject,
  //     text: text,
  //   };

  //   try {
  //     await transporter.sendMail(mailOptions);
  //     console.log("Email send successfully");
  //   } catch (error) {
  //     console.log("Error sending email>>", error);
  //   }
  // };

  //factoring chatgpt
  const formHandler = async (e) => {
    e.preventDefault();
    const msg = validate(age, email);
    if (msg) {
      dispatch({ type: "ALERT__ERROR", item: msg });
      return;
    }
    console.log("...Poszło");
    // sendEmail("Wiadomość AGNES", "Tes nodemailer", email);
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
          item: `Ankieta została wysłana. Dziękuję ${name ? name : email}`,
        });
      })
      // .then(() => {
      //   sendMail(
      //     "Wiadomość wysłane ze strony frontend-ganes.pl",
      //     "Właśnie złożyłeś zapytanie na stronie frontend-agnes.pl. Postaram się odpowiedzieć jak najszybciej zazwyczaj w ciągu 48h, jeżeli ten czas będzie miał sie przedłużyć poinformuję Cię o tym w osobnej wiadomości. pozdrawiam Agnieszka Kamińska",
      //     email
      //   );
      //   sendMail(
      //     "Nowe zapytanie w sprawie oferty",
      //     "Masz nowe zapytanie w sprawie oferty",
      //     import.meta.env.REACT_APP_SMTP_USERNAME
      //   );
      // })
      .then(() => {
        history("/");
      })
      .catch((error) =>
        dispatch({
          type: "ALERT__ERROR",
          item: error.message,
        })
      );
  };
  return (
    <div className="questionare">
      <ButtonBack />
      {isEnglish ? (
        <div className="questionare__isEnglish">
          This page has no translation yet
        </div>
      ) : null}
      <div className="questionare__wrapper">
        <div className="questionare__header">
          <img
            src={aPhoto}
            loading="lazy"
            title="web design"
            alt="web design"
          />
          <div>
            <p>
              Strony koduję na podstawie doręczonych przez klienta projektów
              graficznych.
            </p>
            <p>
              Masz projekt a nie potrafisz go zakodować dobrze trafiłeś, zrobię
              to za Ciebie.
            </p>
            <p>
              Jako frontend developer zajmuję się tylko wyglądem projektu, jako
              bazy danych używam{" "}
              <a href="https://firebase.google.com/">firebase</a> - tam również
              „hostinguję” projekty w czasie realizacji do podglądu dla klienta.
            </p>
            <p>
              Wszystkie niezbędne grafiki (zdjęcia) powinien dostarczyć klient.
            </p>
            <p>
              Na podstawie załączonej ankiety będę w stanie podać Ci cenę
              usługi. Podchodzę indywidualnie do każdego projektu – nie
              wszystkie są takie same więc cena jest zależna od oczekiwań
              klienta.
            </p>
            <p>
              Jeżeli nie chcesz kodowac całej strony a chcesz zmienić tylko
              jedną rzecz np. nagłówek lub menu nie wypełniaj formularza opisz
              wszystko w dodatkowych informacjach na dole strony i załącz
              projekt.
            </p>
            <p>
              Nie masz projektu też możesz napisać - może razem coś wymyślimy{" "}
              <Emoji label="smile" symbol="😀" />
            </p>
            <p>
              Wycena nie jest zobowiązująca. Nie będą Ci odpowiadać moje warunki
              po prostu zakończymy wspópracę na tym etapie.
            </p>
          </div>
        </div>
        {/* <form className="questionare__form" onSubmit={formHandler}> */}
        <form
          className="questionare__form"
          action="https://formsubmit.co/frontendagnes@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nowe zgłoszenie dla forntend-agnes.pl!"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Złożyłeś zapytanie ofertowe na stronie frontend-agnes.pl. Odpowiem najszybciej jak to możliwe. Pozdrawiam AK"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://frontend-agnes.pl/thanks"
          />
          <input
            type="text"
            name="message"
            className="questionare__massage"
            value="Na stornie https://frontend-agnes.pl/ zoatało złożone zapytanie ofertowe."
            readOnly
          />
          <QuestionareModule
            api={apiInfo}
            checked={checkedApi}
            setChecked={setCheckedApi}
            description={
              <>
                <p>
                  <strong>Hosting</strong> - udostępnienie miejsca na serwerze
                  (tam wgrywane są pliki żeby były widoczne w sieci) - przy
                  wyborze płatnego hostingu do ceny usługi zostanie doliczona
                  cena hostingu (na rok)
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
                  - do ceny usuługi zostanie doliczona cena domeny (na rok)
                </p>
              </>
            }
            legend="Informacja o hostingu i domenie"
          />
          <QuestionareModule
            api={functionality}
            legend="Funkcjonalność strony"
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
              <div
                style={{
                  fontFamily: "arial",
                  marginBottom: "20px",
                  marginTop: "-10px",
                }}
              >
                Proszę o dodanie zdjęć pojedynczo, pamiętając żeby każdorazowo
                kliknąć przycisk "Dodaj Zdjęcie"
              </div>
              <Upload photos={photos} setPhotos={setPhotos} isGallery />
              <div className="questionare__gallery">
                {photos.length
                  ? photos.map((item) => <ImageZoom url={item} key={item} />)
                  : null}
              </div>
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
                  name="email"
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
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              size="large"
              type="submit"
            >
              Wyślij Fromularz
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questionare;
