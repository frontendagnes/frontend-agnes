import React from "react";
import "./QuestionareModule.css";
//mui
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
//componet
import Fieldset from "../Fieldset/Fieldset";
function QuestionareModule({ checked, setChecked, description, api, legend }) {
  
  const handleChangeChecked = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }

    setChecked(updatedList);
  };
  return (
    <div className="questionaremodule">
      <Fieldset legend={legend}>
        {api.map((item, index) => (
          <div className="questioneremodule__row" key={index}>
            <FormControlLabel
              value={item}
              onChange={handleChangeChecked}
              control={
                <Checkbox id={`checked-${index}`} name={`checked-${index}`} />
              }
              label={item}
            />
          </div>
        ))}
        {description ? <div className="questionaremodule__desc">{description}</div> : null}
      </Fieldset>
    </div>
  );
}

export default QuestionareModule;
