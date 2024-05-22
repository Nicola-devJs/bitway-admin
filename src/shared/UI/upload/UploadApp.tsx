import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, CircularProgress, ImageList, ImageListItem, Typography } from "@mui/material";
import { ModalApp } from "../modal/ModalApp";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  onChange?: (value: string | string[] | undefined) => void;
}

export const UploadApp = React.forwardRef<HTMLInputElement, IProps>(
  ({ error, helperText, label, onChange, value, ...props }, ref) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [activeStepImage, setActiveStepImage] = React.useState(0);
    const loading = false;

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (!e.target.files) {
        return;
      }
      const urlImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

      onChange?.(urlImages);
    };

    const showModalHandler = (idImg: number) => () => {
      setActiveStepImage(idImg);
      setOpenModal(true);
    };

    const hideModalHandler = () => {
      setOpenModal(false);
    };

    const handleBackStep = () => {
      setActiveStepImage(activeStepImage - 1);
    };

    const handleNextStep = () => {
      setActiveStepImage(activeStepImage + 1);
    };

    return (
      <Box>
        {label && (
          <Typography sx={{ p: 1 }} style={{ color: error ? "#d32f2f" : "inherit" }}>
            {label}
          </Typography>
        )}
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            fullWidth
            startIcon={<CloudUploadIcon />}
            disabled={loading}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={changeHandler}
              accept=".png, .jpg, .jpeg, .gif"
              multiple
              ref={ref}
              {...props}
            />
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
        {helperText && (
          <Typography variant="caption" color={"#d32f2f"}>
            {helperText}
          </Typography>
        )}
        {Array.isArray(value) && (
          <ImageList cols={4} rowHeight={400} sx={{ mt: 3 }}>
            {value.map((url: string, id) => (
              <ImageListItem key={url} onClick={showModalHandler(id)}>
                <img src={url} alt={`image-${url}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        )}
        <ModalApp
          isOpen={openModal}
          handelCloseModal={hideModalHandler}
          content={
            <Box width={"100%"} height={400}>
              {
                <img
                  src={(value as string[])[activeStepImage]}
                  alt={`image-${(value as string[])[activeStepImage]}`}
                  loading="lazy"
                  style={{ objectFit: "cover", objectPosition: "center", height: "inherit", width: "inherit" }}
                />
              }
            </Box>
          }
          actions={
            <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", py: 2 }}>
              <Button size="small" onClick={handleBackStep} disabled={activeStepImage === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>

              <div>{activeStepImage + 1}</div>

              <Button
                size="small"
                onClick={handleNextStep}
                disabled={activeStepImage === (value as string[]).length - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            </Box>
          }
        />
      </Box>
    );
  }
);
