import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import image from "../../../assets/images/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import { LinkApp } from "../../UI/link/LinkApp";
import { NAVMENU } from "../../constants/menu";
import { SnackbarApp } from "../../UI/snackbar/Snackbar";
import { FC, useContext, useEffect, useState } from "react";
import { IPropertyCard } from "../../interfaces/property";
import { useRemovePropertyMutation } from "../../../redux/services/properties";
import { Button, Dialog, DialogActions, DialogTitle, IconButton } from "@mui/material";
import { BackdropContext } from "../../hoc/BackdropProvider";
import { ModalApp } from "../../UI/modal/ModalApp";

export const PropertyCard: FC<IPropertyCard> = ({ heading, description, id, price }) => {
  const [descriptionSnackbar, setDescriptionSnackbar] = useState("");
  const { toggleBackdrop } = useContext(BackdropContext);
  const [openModal, setOpenModal] = useState(false);
  const [removePropertyAction, { isLoading }] = useRemovePropertyMutation();
  const sharePropertyLink = `${NAVMENU.PROPERTY}${id}`;

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  const writeTextHandler: React.MouseEventHandler = () => {
    navigator.clipboard
      .writeText(window.location.href + sharePropertyLink)
      .then(() => setDescriptionSnackbar("Ссылка на объект недвижимости скопирована"))
      .catch(() => setDescriptionSnackbar("Упс, ссылка не скопировалась, попробуйте еще раз"));
  };

  const clearSnackbar = () => {
    setDescriptionSnackbar("");
  };

  const showModalHandler = () => {
    setOpenModal(true);
  };

  const hideModalHandler = () => {
    setOpenModal(false);
  };

  const deletePropertyCard: React.MouseEventHandler = () => {
    removePropertyAction(id)
      .unwrap()
      .then(() => {
        hideModalHandler();
        setDescriptionSnackbar("Вы успешно удалили объект!");
      })
      .catch(() => setDescriptionSnackbar("Упс, похоже что объект не удалился ("));
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
        <CardMedia component="img" alt="green iguana" height="250" image={image} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body1">{price && `${price} ₽`}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="share" onClick={writeTextHandler}>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={showModalHandler}>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="delete" style={{ marginLeft: "auto" }}>
            <LinkApp
              to={sharePropertyLink}
              style={{ color: "inherit", display: "flex", alignItems: "center", gap: 10 }}
            >
              More <ReadMoreIcon />
            </LinkApp>
          </IconButton>
        </CardActions>
      </Card>
      <ModalApp
        isOpen={openModal}
        handelCloseModal={hideModalHandler}
        title={"Вы действительно хотите удалить объект?"}
        actions={
          <>
            <Button onClick={deletePropertyCard} color="primary" autoFocus>
              Удалить
            </Button>
            <Button onClick={hideModalHandler} color="secondary">
              Отмена
            </Button>
          </>
        }
      />
      <SnackbarApp isOpen={!!descriptionSnackbar} handleClose={clearSnackbar} description={descriptionSnackbar} />
    </>
  );
};
