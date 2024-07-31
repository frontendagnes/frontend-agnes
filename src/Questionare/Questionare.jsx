import React, { useState } from "react";
import "./Questionare.css";

import { useStateValue } from "../assets/utility/StateProvider.jsx";

//components
import ButtonBack from "../Global/ButtonBack/ButtonBack.jsx";
import QuestionareInformation from "./QuestionareInformation/QuestionareInformation.jsx";
import FormFalow from "./Form/FormFallow/FormFalow.jsx";
//mui
import { Button } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
function Questionare() {
  const [{ isEnglish }, dispatch] = useStateValue();
  const [isView, setIsView] = useState(false);
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
        <Button
          onClick={() => setIsView(!isView)}
          startIcon={<ChecklistIcon />}
          variant="contained"
        >
          Wypełniam Ankietę
        </Button>
        {isView ? <FormFalow isView={isView} setIsView={setIsView} /> : null}
      </div>
    </div>
  );
}

export default Questionare;
