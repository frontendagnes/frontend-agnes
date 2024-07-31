import React, { useState } from "react";
import "./Progress.css";
//mui
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function Progress({ steps, activeStep, stepLabels }) {
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  return (
    <div className="progress">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={`${label}-${index}`} {...stepProps}>
              <StepLabel>{stepLabels[index]}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
