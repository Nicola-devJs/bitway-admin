import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { FieldFormType, FormApp } from "../form/FormApp";
import { resetUnnecessaryFieldsForm } from "../../helpers/filterProperty";
import { AnnouncementTypeFormFieldsName } from "../../../pages/publish/steps/components/FormFields";
import { PropertyInfo } from "../propertyInfo/PropertyInfo";
import { LinkApp } from "../../UI/link/LinkApp";
import { GenericTypeFields, IFormFields, OptionsCategoryValueKeys } from "../../interfaces/form/formFields";
import { StepContent } from "@mui/material";

interface IProps<T extends IFormFields<GenericTypeFields>> {
  getSteps: (category: OptionsCategoryValueKeys) => { label: string; fields?: FieldFormType<T>[] }[];
  getFormData: (data: T) => void;
  isErrorRequest: boolean;
}

export const StepperApp = <T extends IFormFields<GenericTypeFields>>({
  getSteps,
  getFormData,
  isErrorRequest,
}: IProps<T>) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { control, handleSubmit, getValues, reset } = useForm<T>();
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const categoryValue = getValues()?.category;
  const steps = getSteps(categoryValue);

  const totalSteps = (decrement: number = 0) => steps.length - decrement;

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps(1);
  };

  const isFinishStep = () => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted() ? steps.findIndex((_, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = (data: T) => {
    const newCompleted = completed;
    if (!newCompleted[activeStep]) {
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
    }
    if (isLastStep()) {
      getFormData(data);
    }

    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    resetUnnecessaryFieldsForm(getValues(), [], reset);
  };

  useEffect(() => {
    if (categoryValue) {
      resetUnnecessaryFieldsForm(getValues(), AnnouncementTypeFormFieldsName, reset);
      setCompleted({ 0: true });
    }
  }, [categoryValue]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit">{step.label}</StepButton>

            <StepContent>
              <Box sx={{ mt: 2, mb: 1, py: 2 }}>
                {step.fields ? (
                  <FormApp control={control} fields={step.fields as FieldFormType<T>[]} />
                ) : (
                  <PropertyInfo {...getValues()} />
                )}
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "flex-start" }}>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} variant="contained">
                  Назад
                </Button>
                {activeStep !== steps.length && (
                  <Button onClick={handleSubmit(handleComplete)} type="submit" variant="contained">
                    {completedSteps() === totalSteps(1) ? "Отправить" : "Дальше"}
                  </Button>
                )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {allStepsCompleted() && isFinishStep() ? (
        isErrorRequest && isFinishStep() ? (
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} variant="outlined" sx={{ mt: 2 }}>
            Вернуться к процессу публикации
          </Button>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 3 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <LinkApp to="/">
              <Button>Вернуться в мои объекты</Button>
            </LinkApp>
            <Button onClick={handleReset}>Опубликовать еще</Button>
          </Box>
        )
      ) : null}
    </Box>
  );
};
