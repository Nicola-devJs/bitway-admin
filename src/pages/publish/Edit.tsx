import { useContext, useEffect, useState } from "react";
import { useEditPropertyMutation, useGetPropertyByIdQuery } from "../../redux/services/properties";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";
import { IFormFields, GenericTypeFields } from "../../shared/interfaces/form/formFields";
import { SnackbarApp } from "../../shared/UI/snackbar/Snackbar";
import { useParams } from "react-router-dom";

interface IStatusData {
  text: string;
  isSuccess: boolean;
}

const initialStatusData = { text: "", isSuccess: true };

export const Edit = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { id } = useParams<{ id: string }>();
  const [statusEdited, setStatusEdited] = useState<IStatusData>(initialStatusData);
  const { data: propertyData, isLoading: loadingGetProperty } = useGetPropertyByIdQuery(id!);
  const [editProperty, { isLoading, isError }] = useEditPropertyMutation();

  const showStatusEdited = (statusText: string, isSuccess: boolean) => {
    setStatusEdited({ text: statusText, isSuccess });
  };

  const hideStatusEdited = () => {
    setStatusEdited(initialStatusData);
  };

  const registrateData = (data: IFormFields<GenericTypeFields>) => {
    if (!id) {
      showStatusEdited("Редактируемый объект не распознан", false);
      return;
    }
    editProperty({ id, data })
      .unwrap()
      .then(() => {
        showStatusEdited("Ваш объкт успешно редактирован", true);
      })
      .catch(() => showStatusEdited("Ваш объкт не отредактирован, попробуйте еще раз", false));
  };

  useEffect(() => {
    toggleBackdrop(isLoading || loadingGetProperty);
  }, [isLoading, toggleBackdrop, loadingGetProperty]);

  return (
    <>
      {propertyData?.object && (
        <StepperApp
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getSteps={getFormSteps as any}
          getFormData={registrateData}
          isErrorRequest={isError}
          defaultValues={propertyData?.object}
          isEdit={true}
          disabledField={{ category: true }}
        />
      )}

      <SnackbarApp
        isOpen={!!statusEdited.text}
        handleClose={hideStatusEdited}
        description={statusEdited.text}
        severity={statusEdited.isSuccess ? "success" : "error"}
      />
    </>
  );
};
