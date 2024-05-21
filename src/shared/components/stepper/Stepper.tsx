import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FieldValues, useForm } from "react-hook-form";
import { FieldFormType, FormApp } from "../form/FormApp";
import { OptionsCategoryValueKeys } from "../../../pages/publish/constants/formFieldOptions";

interface IProps<T extends FieldValues> {
  getSteps: (category: OptionsCategoryValueKeys) => { label: string; fields: FieldFormType<T>[] | JSX.Element }[];
  getFormData: (data: T) => void;
}

export const StepperApp = <T extends FieldValues>({ getSteps, getFormData }: IProps<T>) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { control, handleSubmit, getValues, reset } = useForm<T>();
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const steps = getSteps(getValues()?.category);

  const totalSteps = (decrement: number = 0) => steps.length - decrement;

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = (decrement: number = 1) => {
    return activeStep === totalSteps(decrement);
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = (data: T) => {
    const newCompleted = completed;
    if (!newCompleted[activeStep]) {
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
    }
    if (isLastStep(2)) {
      getFormData(data);
    }

    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    reset();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Все степы выполнены</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ mt: 2, mb: 1, py: 2 }}>
              {Array.isArray(steps[activeStep].fields) ? (
                <FormApp control={control} fields={steps[activeStep].fields as FieldFormType<T>[]} />
              ) : (
                <>{steps[activeStep].fields}</>
              )}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Назад
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              {activeStep !== steps.length && (
                <Button onClick={handleSubmit(handleComplete)} type="submit">
                  {completedSteps() === totalSteps(1) ? "Отправить" : "Дальше"}
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
