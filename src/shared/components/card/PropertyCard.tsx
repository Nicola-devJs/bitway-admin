import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import image from "../../../assets/images/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import { LinkApp } from "../../UI/link/LinkApp";
import { NAVMENU } from "../../constants/menu";
import { FC } from "react";
import { IPropertyCard } from "../../interfaces/property";
import { Button, IconButton, styled } from "@mui/material";
import { getTargetCategory, getTargetTransaction } from "../../helpers/propertyValue";
import { GenericTypeFields, IFormFields } from "../../interfaces/form/formFields";

interface IProps {
  property: IPropertyCard;
  showModalDelete: (id: string) => void;
  showModalAddArchive?: (id: string, data: IFormFields<GenericTypeFields>) => void;
  setShareUrlProperty: (id: string) => void;
  redirectPathname?: string;
  isArchive?: boolean;
}

export const PropertyCard: FC<IProps> = ({
  property,
  showModalDelete,
  showModalAddArchive,
  setShareUrlProperty,
  redirectPathname = "",
  isArchive,
}) => {
  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia component="img" alt="green iguana" height="250" image={property.photos[0] || image} />
        <CardContent sx={{ flexGrow: 1 }}>
          <HeadingCard gutterBottom variant="h4">
            {property.heading}
          </HeadingCard>
          <Typography variant="h6" gutterBottom>
            {getTargetCategory(property.category)}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {getTargetTransaction(property.typeTransaction)} | {`${property.price} ₽`}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {property.location}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="share" onClick={() => setShareUrlProperty(property._id)}>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => showModalDelete(property._id)}>
            {isArchive ? <UnarchiveIcon /> : <DeleteIcon />}
          </IconButton>
          {!isArchive && (
            <>
              <IconButton aria-label="add" onClick={() => showModalAddArchive?.(property._id, property)}>
                <ArchiveIcon />
              </IconButton>
              <LinkApp to={`${NAVMENU.EDIT}${property._id}`}>
                <IconButton aria-label="edit">
                  <EditNoteIcon />
                </IconButton>
              </LinkApp>
            </>
          )}

          <Button aria-label="more" style={{ marginLeft: "auto" }} variant="outlined">
            <LinkApp
              to={`${redirectPathname}${property._id}`}
              style={{ color: "inherit", display: "flex", alignItems: "center", gap: 10 }}
            >
              Детали <ReadMoreIcon />
            </LinkApp>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

const HeadingCard = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));
