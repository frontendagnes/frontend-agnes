import React from "react";
import "./Buttons.css";
//mui
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
//components
import HiddenInputs from "../../HiddenInputs/HiddenInputs";
const Buttons = ({
  onNext,
  onPrevious,
  isFirstStep,
  isLastStep,
  isSubmit,
  handleSubmit,
  handleChangeInput,
  email,
  message,
}) => {

  return (
    <div className="buttons">
      {isLastStep && (
        <Button
          onClick={onPrevious}
          startIcon={<ArrowBackIosIcon />}
          variant="contained"
        >
          Wstecz
        </Button>
      )}
      {isFirstStep && (
        <Button
          onClick={onNext}
          endIcon={<ArrowForwardIosIcon />}
          variant="contained"
        >
          Dalej
        </Button>
      )}
      {isSubmit && (
        <form
          className="buttons__form"
          lang="pl"
          action="https://kwesforms.com/api/f/tXo3PJ5xTTpgSYbqUtoW"
          method="POST"
          onSubmit={handleSubmit}
        >
          <HiddenInputs
            email={email}
            message={message}
            handleChange={handleChangeInput}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
            type="submit"
            color="success"
          >
            Wyślij Fromularz
          </Button>
        </form>
      )}
    </div>
  );
};

export default Buttons;
