import { Grid, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, FieldValues, Path, RegisterOptions, Control } from "react-hook-form";

export type FieldFormType<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  inputForm: React.ReactElement;
  defaultValue?: unknown;
};

interface IProps<T extends FieldValues> {
  control: Control<T>;
  fields: FieldFormType<T>[];
}

export const FormApp = <T extends FieldValues>({ fields, control }: IProps<T>) => {
  return (
    <>
      <Grid container sx={{ flexDirection: "column" }} rowGap={2} component={"form"}>
        {fields?.map((field) => (
          <Controller
            control={control}
            name={field.name}
            key={field.name}
            rules={field.rules}
            render={({ field: { value, ...rest }, fieldState }) =>
              React.createElement<TextFieldProps>(field.inputForm.type, {
                ...field.inputForm.props,
                value: value || field.defaultValue || "",
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
                ...rest,
              })
            }
          />
        ))}
      </Grid>
    </>
  );
};
