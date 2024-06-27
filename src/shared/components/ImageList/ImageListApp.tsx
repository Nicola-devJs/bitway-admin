import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, IconButton, ImageListItem, styled } from "@mui/material";
import React from "react";
import { ModalApp } from "../../UI/modal/ModalApp";

interface IProps {
  images: string[];
  widthImage?: number;
  heigthImage?: number;
  onDeleteImage?: (id: number) => void;
  isPreviewImage?: boolean;
}

export const ImageListApp = ({
  images,
  onDeleteImage,
  isPreviewImage,
  widthImage = 200,
  heigthImage = 200,
}: IProps) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [activeStepImage, setActiveStepImage] = React.useState(0);

  const showModalHandler = (idImg: number) => {
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
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={`repeat(auto-fill, minmax(${widthImage}px, 1fr))`}
        gridTemplateRows={`repeat(auto-fill, minmax(0px, ${heigthImage}px))`}
        gap={1}
      >
        {images.map((url: string, id) => (
          <ImageListItem key={url}>
            <img src={url} alt={`image-${url}`} loading="lazy" />
            <ItemImageOverlay>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {onDeleteImage && (
                  <IconButton onClick={() => onDeleteImage(id)} size="large" color="error">
                    <DeleteIcon />
                  </IconButton>
                )}
                {isPreviewImage && (
                  <IconButton onClick={() => showModalHandler(id)} size="large" color="primary">
                    <VisibilityIcon />
                  </IconButton>
                )}
              </Box>
            </ItemImageOverlay>
          </ImageListItem>
        ))}
      </Box>
      {isPreviewImage && (
        <ModalApp
          isOpen={openModal}
          handelCloseModal={hideModalHandler}
          content={
            <Box width={"100%"} height={400}>
              {
                <img
                  src={images[activeStepImage]}
                  alt={`image-${images[activeStepImage]}`}
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

              <Button size="small" onClick={handleNextStep} disabled={activeStepImage === images.length - 1}>
                Next
                <KeyboardArrowRight />
              </Button>
            </Box>
          }
        />
      )}
    </>
  );
};

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
