import { TextFieldProps, styled } from "@mui/material";
import React from "react";
import { Controller, FieldValues, Path, RegisterOptions, Control, PathValue } from "react-hook-form";

export type FieldFormType<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  inputForm: React.ReactElement;
  defaultValue?: PathValue<T, Path<T>>;
};

interface IProps<T extends FieldValues> {
  control: Control<T>;
  fields: FieldFormType<T>[];
  defaultValues?: T;
  disabledField?: { [filed: string]: boolean };
}

export const FormApp = <T extends FieldValues>({ fields, control, defaultValues, disabledField }: IProps<T>) => {
  return (
    <>
      <StyledForm>
        {fields?.map((field) => (
          <Controller
            control={control}
            name={field.name}
            key={field.name}
            rules={field.rules}
            defaultValue={defaultValues?.[field.name] || field.defaultValue}
            render={({ field: { value, disabled, ...rest }, fieldState }) =>
              React.createElement<TextFieldProps>(field.inputForm.type, {
                ...field.inputForm.props,
                value: value || field.defaultValue || "",
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
                disabled: disabledField?.[field.name] || disabled,
                ...rest,
              })
            }
          />
        ))}
      </StyledForm>
    </>
  );
};

const StyledForm = styled("form")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 20,
  alignItems: "end",
});
