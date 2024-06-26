import { useContext, useEffect, useState } from "react";
import { useEditPropertyMutation, useGetPropertyByIdQuery } from "../../redux/services/properties";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";
import { IFormFields, GenericTypeFields } from "../../shared/interfaces/form/formFields";

import { useParams } from "react-router-dom";
import { useSetSnackbar } from "../../shared/hooks/useSetSnackbar";

export const Edit = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { id } = useParams<{ id: string }>();
  const { data: propertyData, isLoading: loadingGetProperty } = useGetPropertyByIdQuery(id!);
  const [editProperty, { isLoading, isError }] = useEditPropertyMutation();
  const { onErrorNotification, onSuccessNotification } = useSetSnackbar();

  const registrateData = async (data: IFormFields<GenericTypeFields>) => {
    if (!id) {
      onErrorNotification("Редактируемый объект не распознан");
      return;
    }

    try {
      editProperty({ id, data }).unwrap();
      onSuccessNotification("Ваш объкт успешно редактирован");
    } catch (error) {
      onErrorNotification("Ваш объкт не отредактирован, попробуйте еще раз");
    }
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
    </>
  );
};
