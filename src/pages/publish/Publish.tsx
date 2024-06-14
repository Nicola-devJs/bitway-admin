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

  const showStatusPublished = (statusText: string) => {
    setStatusPublished(statusText);
  };

  const hideStatusPublished = () => {
    setStatusPublished("");
  };

  const registrateData = (data: IFormFields<GenericTypeFields>) => {
    publishProperty(data)
      .unwrap()
      .then(() => {
        showStatusPublished("Ваш объкт успешно опубликован");
      })
      .catch(() => showStatusPublished("Ваш объкт не опубликовался, попробуйте еще раз"));
  };

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading, toggleBackdrop]);

  return (
    <>
      <StepperApp
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getSteps={getFormSteps as any}
        getFormData={registrateData}
        isErrorRequest={isError}
      />
      <SnackbarApp
        isOpen={!!statusPublished}
        handleClose={hideStatusPublished}
        description={statusPublished}
        severity={isSuccess ? "success" : "error"}
      />
    </>
  );
};
