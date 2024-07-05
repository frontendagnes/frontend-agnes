import React, { useEffect, useState } from "react";
import "./Questionare.css";

import { useNavigate } from "react-router-dom";
import kwesforms from "kwesforms";
import { validate } from "./FormValidation.jsx";

import useFormState from "./useFormState.jsx";
import { useStateValue } from "../assets/utility/StateProvider.jsx";
import {
  addDoc,
  collection,
  db,
  serverTimestamp,
} from "../assets/utility/firebase.jsx";

//mui
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
//data
import { apiInfo, functionality, otherElements } from "./data.js";

//components
import ButtonBack from "../Global/ButtonBack/ButtonBack.jsx";
import ImageZoom from "../Global/ImageZoom/ImageZoom.jsx";
import Upload from "../Global/Upload/Upload.jsx";
import Fieldset from "./Fieldset/Fieldset.jsx";
import QuestionareModule from "./QuestionareModule/QuestionareModule.jsx";
import HiddenInputs from "./HiddenInputs/HiddenInputs.jsx";
import QuestionareInformation from "./QuestionareInformation/QuestionareInformation.jsx";
import HostingDescription from "./HostingDescription/HostingDescription.jsx";
import ContactInputs from "./ContactInputs/ContactInputs.jsx";

function Questionare() {
  //global state
  const [{ isEnglish }, dispatch] = useStateValue();

  // aplication state
  const {
    checkedApi,
    setCheckedApi,
    checkedFunctionality,
    setCheckedFunctionality,
    checkedElements,
    setCheckedElements,
    areaField,
    setAreaField,
    email,
    setEmail,
    name,
    setName,
    age,
    setAge,
    photos,
    setPhotos,
  } = useFormState();

  // message sent by email
  const [message, setMessage] = useState(
    "Na stornie https://frontend-agnes.pl/ zoatało złożone zapytanie ofertowe."
  );

  const history = useNavigate();

  useEffect(() => {
    kwesforms.init();
  }, []);

  // aprove - sent button function
  const formHandler = async (e) => {
    e.preventDefault();
    const msg = validate(age, email);
    if (msg) {
      dispatch({ type: "ALERT__ERROR", item: msg });
      return;
    }
    try {
      await addDoc(collection(db, "questionare"), {
        timestamp: serverTimestamp(),
        imageUrls: photos,
        hosting: checkedApi,
        functionality: checkedFunctionality,
        elements: checkedElements,
        area: areaField,
        email: email,
        name: name,
      });

      dispatch({
        type: "ALERT_SUCCESS",
        item: `Ankieta została wysłana. Dziękuję ${name ? name : email}`,
      });

      //Manual form submission after validation and operations
      const form = e.target;
      const formData = new FormData(form);
      await fetch(form.action, {
        method: form.method,
        body: formData,
      });
      history("/thanks");
    } catch (error) {
      dispatch({
        type: "ALERT__ERROR",
        item: error.message,
      });
    }
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
          <QuestionareInformation />
        </div>
        <div className="questionare__formsWrapper">
          <form className="questionare__form">
            <QuestionareModule
              api={apiInfo}
              checked={checkedApi}
              setChecked={setCheckedApi}
              description={<HostingDescription />}
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
                <div className="questionare__galleryDiscrition">
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
                <ContactInputs
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                />
              </Fieldset>
            </div>
            {/* spam detector */}
            <input
              type="text"
              placeholder="age"
              name="age"
              autoComplete="off"
              className="questionare__age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </form>
          {/* hidden fields only for sending email */}
          <form
            className="questionare__form"
            lang="pl"
            action="https://kwesforms.com/api/f/tXo3PJ5xTTpgSYbqUtoW"
            method="POST"
            onSubmit={formHandler}
          >
            <HiddenInputs
              message={message}
              setMessage={setMessage}
              email={email}
              setEmail={setEmail}
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
    </div>
  );
}

export default Questionare;
