import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, CircularProgress, IconButton, ImageListItem, Typography } from "@mui/material";
import { ModalApp } from "../modal/ModalApp";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useUploadFilesMutation } from "../../../redux/services/files";

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

const ItemImageOverlay = styled(Box)({
  "position": "absolute",
  "top": 0,
  "left": 0,
  "right": 0,
  "bottom": 0,
  "transition": "all .2s ease",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "backgroundColor": "transparent",
  "opacity": 0,
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    opacity: 1,
  },
});

const StyledListImages = styled("div")({
  display: "grid",
  grid: "auto / repeat(auto-fill, minmax(200px, 1fr))",
  gap: 10,
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
    const [fetcherUploadFiles, { isLoading }] = useUploadFilesMutation();

    const getUrls = async (files: File[]): Promise<Array<string>> => {
      const urls = [];
      for (const file of files) {
        const formData = new FormData();

        formData.append("file", file);
        try {
          const data = await fetcherUploadFiles(formData).unwrap();
          urls.push(`${import.meta.env.VITE_BACKEND_API}${data.url}`);
        } catch (err) {
          return [];
        }
      }

      return urls;
    };

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
      const files = e.target.files;

      if (!files) {
        return;
      }

      const dataUrls = await getUrls(Array.from(files));

      onChange?.(dataUrls);
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

    const handelDeleteImage = (id: number) => () => {
      if (!Array.isArray(value)) {
        return;
      }

      const filteredImages = value.filter((_, idImage) => idImage !== id);
      onChange?.(filteredImages);
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
            disabled={isLoading}
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
          {isLoading && (
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
          <StyledListImages>
            {value.map((url: string, id) => (
              <ImageListItem key={url}>
                <img src={url} alt={`image-${url}`} loading="lazy" />
                <ItemImageOverlay>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={handelDeleteImage(id)} size="large" color="error">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={showModalHandler(id)} size="large" color="primary">
                      <VisibilityIcon />
                    </IconButton>
                  </Box>
                </ItemImageOverlay>
              </ImageListItem>
            ))}
          </StyledListImages>
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
