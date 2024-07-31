import React from "react";
import { functionality } from "../../data.js";
import MotionDiv from "../util/MotionDiv.jsx";
import Fieldset from "../../Fieldset/Fieldset.jsx";
//mui
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "../Buttons/Buttons.jsx";

const Step2 = (props) => {
  const { handleChangeSelect, onPrevious, onNext, formState } = props;

  return (
    <MotionDiv>
      <Fieldset legend="Funkcjonalność Strony">
        {functionality.map((item, index) => (
          <div className="questioneremodule__row" key={`${index}-${item}`}>
            <FormControlLabel
              control={
                <Checkbox
                  id={`checkedFunctionality-${index}`}
                  name="checkedFunctionality"
                  value={item}
                  checked={formState.checkedFunctionality.includes(item)}
                  onChange={handleChangeSelect}
                />
              }
              label={item}
            />
          </div>
        ))}
        <Buttons
          onPrevious={onPrevious}
          onNext={onNext}
          isFirstStep
          isLastStep
        />
      </Fieldset>
    </MotionDiv>
  );
};

export default Step2;
