import { useContext, useEffect, useState } from "react";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";
import { IFormFields, GenericTypeFields } from "../../shared/interfaces/form/formFields";
import { SnackbarApp } from "../../shared/UI/snackbar/Snackbar";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const [statusPublished, setStatusPublished] = useState("");
  const [publishProperty, { isLoading, isSuccess, isError }] = useAddPropertyMutation();

  const showStausPublished = (statusText: string) => {
    setStatusPublished(statusText);
  };

  const hideStausPublished = () => {
    setStatusPublished("");
  };

  const registateDate = (data: IFormFields<GenericTypeFields>) => {
    publishProperty(data)
      .unwrap()
      .then(() => {
        showStausPublished("Ваш объкт успешно опубликован");
      })
      .catch(() => showStausPublished("Ваш объкт не опубликовался, попробуйте еще раз"));
  };

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading, toggleBackdrop]);

  return (
    <>
      <StepperApp getSteps={getFormSteps as any} getFormData={registateDate} isErrorRequest={isError} />
      <SnackbarApp
        isOpen={!!statusPublished}
        handleClose={hideStausPublished}
        description={statusPublished}
        severity={isSuccess ? "success" : "error"}
      />
    </>
  );
};
