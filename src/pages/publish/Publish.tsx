import { Button, TextFieldProps } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFieldValues } from "../../shared/interfaces/property";
import React, { useContext, useEffect } from "react";
import { FormFields } from "./components/FormFields";
import { useAddPropertyMutation } from "../../redux/services/properties";
import { useNavigate } from "react-router-dom";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";

export const Publish = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { handleSubmit, control } = useForm<IFieldValues>();
  const [addPropertyAction, { isLoading }] = useAddPropertyMutation();
  const navigate = useNavigate();

  const submitHandlerForm: SubmitHandler<IFieldValues> = (data) => {
    addPropertyAction(data)
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  return (
    <>
      <Grid
        container
        sx={{ flexDirection: "column" }}
        rowGap={2}
        component={"form"}
        onSubmit={handleSubmit(submitHandlerForm)}
      >
        {FormFields.map((field) => (
          <Controller
            control={control}
            name={field.name}
            key={field.name}
            rules={field.rules}
            render={({ field: { value, ...rest }, fieldState }) =>
              React.createElement<TextFieldProps>(field.inputForm.type, {
                ...field.inputForm.props,
                value: value || "",
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
                ...rest,
              })
            }
          />
        ))}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </>
  );
};
