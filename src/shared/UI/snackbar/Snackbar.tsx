import { FC } from "react";

import { Alert, AlertProps, Snackbar } from "@mui/material";

interface IProps extends AlertProps {
  isOpen: boolean;
  handleClose: () => void;
  description: string;
  delay?: number;
}

export const SnackbarApp: FC<IProps> = ({ isOpen, handleClose, description, delay = 3000, ...props }) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={delay} onClose={handleClose}>
      <Alert
        {...props}
        severity={props.severity || "success"}
        onClose={handleClose}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {description}
      </Alert>
    </Snackbar>
  );
};
