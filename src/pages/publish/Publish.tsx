import React, { useContext, useEffect } from "react";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { useNavigate } from "react-router-dom";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { getFormSteps } from "./steps/index";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);

  // const submitHandlerForm: SubmitHandler<IFieldValues> = (data) => {
  //   addPropertyAction(data)
  //     .unwrap()
  //     .then(() => navigate("/"));
  // };

  // useEffect(() => {
  //   toggleBackdrop(isLoading);
  // }, [isLoading]);

  const registateDate = (data: Record<string, any>) => {
    console.log(data);
  };

  // TODO Было бы неплохо избавиться от any
  return (
    <>
      <StepperApp getSteps={getFormSteps as any} getFormData={registateDate} />
    </>
  );
};
