import { ToggleButtonGroup, ToggleButton, ToggleButtonGroupProps, Box, Typography } from "@mui/material";
import { forwardRef } from "react";

type OptionType = {
  value: string;
  label: string;
};

interface IProps extends ToggleButtonGroupProps {
  list: OptionType[];
  label?: string;
  helperText?: string;
  error?: boolean;
  onChange?: (value: any) => void;
  multiple?: boolean;
}

export const ToggleButtons = forwardRef<HTMLInputElement, IProps>(
  ({ list, label, helperText, error, onChange, multiple, ...props }, ref) => {
    return (
      <Box>
        {label && (
          <Typography sx={{ p: 1 }} style={{ color: error ? "#d32f2f" : "inherit" }}>
            {label}
          </Typography>
        )}
        <ToggleButtonGroup
          ref={ref}
          fullWidth
          {...props}
          onChange={(_, value) => onChange?.(value)}
          exclusive={!multiple}
        >
          {list.map((option) => (
            <ToggleButton key={option.value} value={option.value} sx={{ borderColor: error ? "#d32f2f" : "inherit" }}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {helperText && (
          <Typography variant="caption" color={"#d32f2f"}>
            {helperText}
          </Typography>
        )}
      </Box>
    );
  }
);
