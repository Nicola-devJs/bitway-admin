import { useContext, useEffect } from "react";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";
import { IFormFields, GenericTypeFields } from "../../shared/interfaces/form/formFields";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const [publishProperty, { isLoading }] = useAddPropertyMutation();

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading, toggleBackdrop]);

  const registateDate = (data: IFormFields<GenericTypeFields>) => {
    publishProperty(data);
  };

  return (
    <>
      <StepperApp getSteps={getFormSteps as any} getFormData={registateDate} />
    </>
  );
};
