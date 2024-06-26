import { useContext, useEffect } from "react";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";
import { IFormFields, GenericTypeFields } from "../../shared/interfaces/form/formFields";
import { useSetSnackbar } from "../../shared/hooks/useSetSnackbar";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);

  const [publishProperty, { isLoading, isError }] = useAddPropertyMutation();
  const { onErrorNotification, onSuccessNotification } = useSetSnackbar();

  const registrateData = async (data: IFormFields<GenericTypeFields>) => {
    try {
      await publishProperty(data).unwrap();
      onSuccessNotification("Ваш объкт успешно опубликован");
    } catch (error) {
      onErrorNotification("Ваш объкт не опубликовался, попробуйте еще раз");
    }
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
    </>
  );
};
