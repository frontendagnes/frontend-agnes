import React from "react";

//components
import DivMotion from "../util/MotionDiv";
import Fieldsest from "../../Fieldset/Fieldset";
import Buttons from "../Buttons/Buttons";

//mui
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
function Step6(props) {
  const {
    onNext,
    onPrevious,
    formState,
    handleChangeInput,
    handleSubmit,
    message,
  } = props;
  return (
    <DivMotion>
      <Fieldsest legend="Podaj dane do kontaktu">
        <Stack spacing={2}>
          <Input
            type="text"
            value={formState.name}
            onChange={handleChangeInput}
            name="name"
            size="lg"
            startDecorator={<PersonIcon />}
            label="podaj swoje imię"
            placeholder="podaj swoje imię"
          />
          <Input
            type="email"
            value={formState.email}
            onChange={handleChangeInput}
            name="email"
            size="lg"
            startDecorator={<EmailIcon />}
            label="podaj adres email"
            placeholder="podaj adres email"
          />
        </Stack>
        <Buttons
          onNext={onNext}
          onPrevious={onPrevious}
          isLastStep
          isSubmit
          handleSubmit={handleSubmit}
          email={formState.email}
          message={message}
          handleChangeInput={handleChangeInput}
        />
      </Fieldsest>
    </DivMotion>
  );
}

export default Step6;
