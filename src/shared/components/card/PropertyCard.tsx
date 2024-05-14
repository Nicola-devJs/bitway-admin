import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../../assets/images/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import { LinkApp } from "../../UI/link/LinkApp";
import { NAVMENU } from "../../constants/menu";
import { SnackbarApp } from "../../UI/snackbar/Snackbar";
import { FC, useState } from "react";
import { IPropertyCard } from "../../interfaces/property";

export const PropertyCard: FC<IPropertyCard> = ({ heading, description, id, price }) => {
  const [descriptionSnackbar, setDescriptionSnackbar] = useState("");
  const sharePropertyLink = `${NAVMENU.PROPERTY}${encodeURIComponent(heading)}`;

  const writeTextHandler = () => {
    navigator.clipboard
      .writeText(window.location.href + sharePropertyLink)
      .then(() => setDescriptionSnackbar("Ссылка на объект недвижимости скопирована"))
      .catch(() => setDescriptionSnackbar("Упс, ссылка не скопировалась, попробуйте еще раз"));
  };

  const clearSnackbar = () => {
    setDescriptionSnackbar("");
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="green iguana" height="250" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body1">{price} ₽</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" onClick={writeTextHandler}>
            Share
          </Button>
          <Button size="small">
            <LinkApp to={sharePropertyLink} style={{ color: "#1976d2" }} state={id}>
              More
            </LinkApp>
          </Button>
        </CardActions>
      </Card>
      <SnackbarApp isOpen={!!descriptionSnackbar} handleClose={clearSnackbar} description={descriptionSnackbar} />
    </>
  );
};
