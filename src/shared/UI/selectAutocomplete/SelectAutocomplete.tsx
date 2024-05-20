import { Autocomplete, BaseTextFieldProps, TextField } from "@mui/material";
import { ReactNode, forwardRef } from "react";

interface IProps<T> extends BaseTextFieldProps {
  options: T[];
  error?: boolean;
  helperText?: ReactNode;
  multiple?: boolean;
  onChange?: (value: T) => void;
  value?: T;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
}

export const SelectAutocompleteApp = forwardRef<HTMLInputElement, IProps<any>>(
  ({ options, multiple, onChange, value, isOptionEqualToValue, ...props }, ref) => {
    return (
      <Autocomplete
        multiple={multiple}
        options={options}
        onChange={(_, value) => {
          onChange?.(value);
        }}
        value={value}
        filterSelectedOptions
        isOptionEqualToValue={isOptionEqualToValue}
        renderInput={(params) => <TextField {...params} {...props} ref={ref} />}
      />
    );
  }
);
