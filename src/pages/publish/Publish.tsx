import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFieldValues } from "../../shared/interfaces/property";
import React, { useContext, useEffect } from "react";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { useNavigate } from "react-router-dom";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { StepperApp } from "../../shared/components/stepper/Stepper";
import { useGetFormSteps } from "./components/FormSteps";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { handleSubmit, control } = useForm<IFieldValues>();
  const [addPropertyAction, { isLoading }] = useAddPropertyMutation();
  const navigate = useNavigate();
  const formSteps = useGetFormSteps();

  // const submitHandlerForm: SubmitHandler<IFieldValues> = (data) => {
  //   addPropertyAction(data)
  //     .unwrap()
  //     .then(() => navigate("/"));
  // };

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  return <StepperApp steps={formSteps} />;
};
