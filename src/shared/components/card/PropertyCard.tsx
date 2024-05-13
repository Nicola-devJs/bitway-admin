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
import { useState } from "react";

// TODO Временная переменная
const NAMEPROPERTY = "name";

export const PropertyCard = () => {
  const [descriptionSnackbar, setDescriptionSnackbar] = useState("");

  const writeTextHandler = () => {
    navigator.clipboard
      .writeText(`${NAVMENU.PROPERTY}${NAMEPROPERTY}`)
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
            Property
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti in ex tempora perspiciatis labore
            repellendus minus a. Totam amet alias numquam est molestias, suscipit possimus fuga optio aliquid dolor
            vero!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" onClick={writeTextHandler}>
            Share
          </Button>
          <Button size="small">
            <LinkApp to={`${NAVMENU.PROPERTY}${NAMEPROPERTY}`} style={{ color: "#1976d2" }}>
              More
            </LinkApp>
          </Button>
        </CardActions>
      </Card>
      <SnackbarApp isOpen={!!descriptionSnackbar} handleClose={clearSnackbar} description={descriptionSnackbar} />
    </>
  );
};
