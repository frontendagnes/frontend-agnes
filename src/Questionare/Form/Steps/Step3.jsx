import React from "react";
import { otherElements } from "../../data.js";
import MotionDiv from "../util/MotionDiv.jsx";
import Fieldset from "../../Fieldset/Fieldset.jsx";
//mui
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "../Buttons/Buttons.jsx";

const Step3 = (props) => {
  const { handleChangeSelect, onPrevious, onNext, formState } = props;

  return (
    <MotionDiv>
      <Fieldset legend="Dodatkowe elemtnty" className="step__fieldest">
        {otherElements.map((item, index) => (
          <div className="questioneremodule__row" key={`${index}-${item}`}>
            <FormControlLabel
              control={
                <Checkbox
                  id={`checkedElements-${index}`}
                  name="checkedElements"
                  value={item}
                  checked={formState.checkedElements.includes(item)}
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

export default Step3;
