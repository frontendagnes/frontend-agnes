import React, { lazy, Suspense, useEffect, useState } from "react";
import "./FormFallow.css";

import useFormState from "../util/useFormState.jsx"; // Poprawiony import
import {
  addDoc,
  collection,
  db,
  serverTimestamp,
} from "../../../assets/utility/firebase.jsx";

import { useStateValue } from "../../../assets/utility/StateProvider.jsx";
import { useNavigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
//components
import Progress from "../Progress/Progress.jsx";
import { validate } from "../../FormValidation.jsx";
//mui
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
const steps = [
  lazy(() => import("../Steps/Step1.jsx")),
  lazy(() => import("../Steps/Step2.jsx")),
  lazy(() => import("../Steps/Step3.jsx")),
  lazy(() => import("../Steps/Step4.jsx")),
  lazy(() => import("../Steps/Step5.jsx")),
  lazy(() => import("../Steps/Step6.jsx")),
];
const stepLabels = [
  "Informacja o hostingu i domenie",
  "Funkcjonalność strony",
  "Dodatkowe Elementy",
  "Dodatkowe Informacje",
  "Projekt graficzny",
  "Dane do kontaktu",
];

function FormFalow({ isView, setIsView }) {
  const [step, setStep] = useState(1);
  const { formState, setFormState, handleChangeInput, handleChangeSelect } =
    useFormState(); // Poprawione użycie hooka
  const [message, setMessage] = useState(
    "Na stornie https://frontend-agnes.pl/ zoatało złożone zapytanie ofertowe."
  );
  const [{ alert }, dispatch] = useStateValue();
  const history = useNavigate();

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const msg = validate(formState.age, formState.email);
    if (msg) {
      dispatch({ type: "ALERT__ERROR", item: msg });
      return;
    }
    try {
      await addDoc(collection(db, "questionare"), {
        timestamp: serverTimestamp(),
        imageUrls: formState.photos,
        hosting: formState.checkedApi,
        functionality: formState.checkedFunctionality,
        elements: formState.checkedElements,
        area: formState.areaField,
        email: formState.email,
        name: formState.name,
      });

      dispatch({
        type: "ALERT_SUCCESS",
        item: `Ankieta została wysłana. Dziękuję ${
          formState.name ? formState.name : formState.email
        }`,
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

  const StepComponent = steps[step - 1];

  return (
    <div className="formFallow">
      <IconButton
        aria-label="cancel"
        onClick={() => setIsView(!isView)}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "9999",
        }}
      >
        <CancelIcon sx={{ color: "#fafafafa" }} fontSize="large" />
      </IconButton>
      <Progress steps={steps} activeStep={step - 1} stepLabels={stepLabels} />
      <Suspense
        fallback={
          <div
            style={{
              color: "white",
              fontSize: "2rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            Loading...
          </div>
        }
      >
        <AnimatePresence>
          <StepComponent
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            formState={formState}
            setFormState={setFormState}
            handleChangeInput={handleChangeInput}
            handleChangeSelect={handleChangeSelect}
            handleSubmit={formHandler}
            message={message}
          />
        </AnimatePresence>
        <input
          type="text"
          placeholder="age"
          name="age"
          autoComplete="off"
          className="questionare__age"
          value={formState.age}
          onChange={handleChangeInput}
        />
      </Suspense>
    </div>
  );
}

export default FormFalow;
