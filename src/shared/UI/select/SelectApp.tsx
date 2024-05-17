import { forwardRef } from "react";
import { Box, InputLabel, MenuItem, Select, SelectProps, Typography } from "@mui/material";

type OptionType = {
  value: number | string;
  label: string;
};

interface IProps {
  list: OptionType[];
  helperText?: string;
  label?: string;
}

export const SelectApp = forwardRef<HTMLInputElement, IProps & SelectProps>(
  ({ list, helperText, label, ...props }, ref) => {
    return (
      <Box>
        {label && <InputLabel sx={{ p: 1 }}>{label}</InputLabel>}
        <Select {...props} ref={ref} fullWidth placeholder={label}>
          {list.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && (
          <Typography variant="caption" color={"red"}>
            {helperText}
          </Typography>
        )}
      </Box>
    );
  }
);
