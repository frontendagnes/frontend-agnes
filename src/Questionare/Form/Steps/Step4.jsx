import React from "react";
import "./Steps.css";
//components
import DivMotion from "../util/MotionDiv";
import Buttons from "../Buttons/Buttons";
import Fieldset from "../../Fieldset/Fieldset";

const Step4 = (props) => {
  const { handleChangeInput, formState, onNext, onPrevious } = props;
  return (
    <DivMotion>
      <Fieldset legend="Dodatkowe informacje">
        <textarea
          className="questionare__textarea"
          placeholder="dodatkowe informacje..."
          value={formState.areaField}
          name="areaField"
          onChange={handleChangeInput}
        />
        <div className="step4__list">
          <div>Tutaj możesz odpowiedzieć na następujące pytania:</div>
          <ol>
            <li>Jaki jest cel aplikacji?</li>
            <li>Jakie ma spełaniać zadania?</li>
            <li>Jaka jest grupa docelowa?</li>
            <li>Czy istnieje projekt który może posłóżyć za inspirację?</li>
            <li>Czy będą animacje i jak wiele?</li>
            <li>Jaka jest preferowana kolorystyka?</li>
            <li>Wszystkie inne rzeczy które chcesz przekazać!</li>
          </ol>
        </div>
        <Buttons
          onNext={onNext}
          onPrevious={onPrevious}
          isLastStep
          isFirstStep
        />
      </Fieldset>
    </DivMotion>
  );
};

export default Step4;
