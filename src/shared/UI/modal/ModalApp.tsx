import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC, ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  handelCloseModal: () => void;

  title?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
}

export const ModalApp: FC<IProps> = ({ handelCloseModal, isOpen, actions, content, title }) => {
  return (
    <Dialog open={isOpen} onClose={handelCloseModal} fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}
      <IconButton
        aria-label="close"
        onClick={handelCloseModal}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      {content && <DialogContent>{content}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
