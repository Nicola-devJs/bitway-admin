import { forwardRef } from "react";
import { BaseTextFieldProps, MenuItem, TextField } from "@mui/material";

type OptionType = {
  value: number | string;
  label: string;
};

interface IProps extends BaseTextFieldProps {
  options: OptionType[];
  error?: boolean;
  helperText?: string;
}

export const SelectApp = forwardRef<HTMLInputElement, IProps>(({ options, ...props }, ref) => {
  return (
    <TextField select {...props} ref={ref}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
});
