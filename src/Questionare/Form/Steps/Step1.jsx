import React from "react";
import { apiInfo } from "../../data.js";
import MotionDiv from "../util/MotionDiv.jsx";
import Fieldset from "../../Fieldset/Fieldset.jsx";
import HostingDescription from "../../HostingDescription/HostingDescription.jsx";
//mui
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "../Buttons/Buttons.jsx";

const Step1 = (props) => {
  const { handleChangeSelect, onPrevious, onNext, formState } =
    props;

  return (
    <MotionDiv>
      <Fieldset legend="Informacje o hostingu i domenie" className="step__fieldest">
        {apiInfo.map((item, index) => (
          <div className="questioneremodule__row" key={`${index}-${item}`}>
            <FormControlLabel
              control={
                <Checkbox
                  id={`checkedApi-${index}`}
                  name="checkedApi"
                  value={item}
                  checked={formState.checkedApi.includes(item)}
                  onChange={handleChangeSelect}
                />
              }
              label={item}
            />
          </div>
        ))}
        <HostingDescription />
        <Buttons onPrevious={onPrevious} onNext={onNext} isFirstStep />
      </Fieldset>
    </MotionDiv>
  );
};

export default Step1;
