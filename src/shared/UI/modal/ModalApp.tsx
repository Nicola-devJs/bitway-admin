import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC, ReactNode } from "react";

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
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={handelCloseModal}
          sx={{
            "position": "absolute",
            "right": 8,
            "top": 8,
            "color": (theme) => theme.palette.grey[500],
            "backgroundColor": "white",
            ":hover": {
              backgroundColor: "rgba(230, 230, 230, 0.986)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {content && <DialogContent>{content}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
