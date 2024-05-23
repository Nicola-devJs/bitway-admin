import React, { useContext, useEffect } from "react";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const [publishObject, { isLoading }] = useAddPropertyMutation();

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading, toggleBackdrop]);

  const registateDate = (data: Record<string, unknown>) => {
    publishObject(data);
  };

  return (
    <>
      <StepperApp getSteps={getFormSteps as any} getFormData={registateDate} />
    </>
  );
};
