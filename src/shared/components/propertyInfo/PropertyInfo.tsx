import { FC, useContext, useEffect, useState } from "react";
import { GenericTypeFields } from "../../interfaces/form/formFields";
import { Box, Button, Typography, IconButton, useMediaQuery } from "@mui/material";
import { ImageListApp } from "../ImageList/ImageListApp";
import PlaceIcon from "@mui/icons-material/Place";
import { ModalApp } from "../../UI/modal/ModalApp";
import { getDetailsProperty, writeUrlProperty } from "../../helpers/others";
import {
  useAddArchiveMutation,
  useRemoveArchiveMutation,
  useRemovePropertyMutation,
} from "../../../redux/services/properties";
import { IPropertyCard } from "../../interfaces/property";
import { BackdropContext } from "../../hoc/BackdropProvider";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { LinkApp } from "../../UI/link/LinkApp";
import { NAVMENU } from "../../constants/menu";
import { useNavigate } from "react-router-dom";
import { useSetSnackbar } from "../../hooks/useSetSnackbar";
import { DetailsProperty } from "../detailsProperty/DetailsProperty";
import { PropertyParamsFields } from "../../interfaces/form/paramsFields";
import { PropertyFeaturedFields } from "../../interfaces/form/featuresFields";
import { paramsPropertyLocalization, featuredPropertyLocalization } from "../../constants/detailsProperty";

interface IProps {
  property: IPropertyCard<GenericTypeFields>;
  isArchive?: boolean;
  isPreview?: boolean;
}

export const PropertyInfo: FC<IProps> = ({ property, isArchive, isPreview }) => {
  const navigate = useNavigate();
  const { toggleBackdrop } = useContext(BackdropContext);
  const { onErrorNotification, onSuccessNotification } = useSetSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [removePropertyAction, { isLoading: removePropertyLoading }] = useRemovePropertyMutation();
  const [removeArchiveAction, { isLoading: removeArchiveLoading }] = useRemoveArchiveMutation();
  const [addArchiveAction, { isLoading: addArchiveLoading }] = useAddArchiveMutation();
  const isLaptopScreen = useMediaQuery("(max-width: 1024px)");
  const isLaptopLargeScreen = useMediaQuery("(max-width: 1300px)");

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onAddArchive = async () => {
    try {
      await addArchiveAction({ id: property._id, body: property }).unwrap();
      onSuccessNotification("Вы успешно добавили объект в архив");

      navigate("/");
    } catch (error) {
      onErrorNotification("Ваш объект не добавился в архив, попробуйте еще раз");
    }
  };

  const onDeleteProperty = async () => {
    try {
      await removePropertyAction(property._id).unwrap();
      onSuccessNotification("Вы успешно удалили объект");

      navigate("/");
    } catch (error) {
      onErrorNotification("Ваш объект не удалился, попробуйте еще раз");
    } finally {
      onCloseModal();
    }
  };

  const onDeleteArchive = async () => {
    try {
      await removeArchiveAction(property._id).unwrap();
      onSuccessNotification("Вы успешно удалили архив");

      navigate("/");
    } catch (error) {
      onErrorNotification("Ваш архив не удалился, попробуйте еще раз");
    } finally {
      onCloseModal();
    }
  };

  const onWriteUrlProperty = () => {
    writeUrlProperty(property._id, onSuccessNotification, onErrorNotification);
  };

  useEffect(() => {
    toggleBackdrop(removePropertyLoading || addArchiveLoading || removeArchiveLoading);
  }, [removePropertyLoading, removeArchiveLoading, addArchiveLoading]);

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          flexDirection={isLaptopScreen ? "column-reverse" : "row"}
        >
          <Typography variant="h4" marginBottom={3}>
            {property.heading}
          </Typography>
          {!isPreview && (
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <IconButton aria-label="share" onClick={onWriteUrlProperty}>
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={onOpenModal}>
                {isArchive ? <UnarchiveIcon /> : <DeleteIcon />}
              </IconButton>
              {!isArchive && (
                <>
                  <IconButton aria-label="add" onClick={onAddArchive}>
                    <ArchiveIcon />
                  </IconButton>
                  <LinkApp to={`/${NAVMENU.EDIT}${property._id}`}>
                    <IconButton aria-label="edit">
                      <EditNoteIcon />
                    </IconButton>
                  </LinkApp>
                </>
              )}
            </Box>
          )}
        </Box>

        <Typography marginBottom={2} display={"flex"} align="center" gap={1}>
          <PlaceIcon color="primary" fontSize="medium" /> <Typography variant="body1">{property.location}</Typography>
        </Typography>
        <Typography variant="h6" marginBottom={1}>
          Цена {property.price} ₽
        </Typography>
        <Box display={"flex"} gap={3} flexDirection={isLaptopLargeScreen ? "column" : "row"}>
          <Box display={"flex"} flex={"0 1 40%"} flexDirection={"column"}>
            <Typography variant="h6" marginBottom={1}>
              Описание
            </Typography>
            <Typography variant="body1">{property.description}</Typography>
          </Box>
          <Box display={"flex"} flex={"0 1 60%"} gap={3} marginBottom={3}>
            <Box flex={"0 1 50%"}>
              <Typography variant="h6">Параметры</Typography>
              <DetailsProperty
                type="params"
                details={getDetailsProperty<keyof PropertyParamsFields>(
                  property,
                  [
                    { key: "balconies" },
                    { key: "floorHouse" },
                    { key: "bathroom" },
                    { key: "floor" },
                    { key: "generalArea" },
                    { key: "livingArea" },
                    { key: "numberRooms" },
                    { key: "typeStructure" },
                  ],
                  paramsPropertyLocalization
                )}
              />
            </Box>
            <Box flex={"0 1 50%"}>
              <Typography variant="h6">Особенности</Typography>
              <DetailsProperty
                type="featured"
                details={getDetailsProperty<keyof PropertyFeaturedFields>(
                  property,
                  [
                    { key: "additionally" },
                    { key: "electricity" },
                    { key: "entrance" },
                    { key: "elevators" },
                    { key: "entrance" },
                    { key: "gas" },
                    { key: "heating" },
                    { key: "parking" },
                    { key: "renovation" },
                    { key: "sewerage" },
                    { key: "waterSupply" },
                  ],
                  featuredPropertyLocalization
                )}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} gap={5} flexDirection={isLaptopScreen ? "column" : "row"}>
        {Boolean(property.photos.length) && (
          <Box flex={"0 1 50%"}>
            <Typography variant="h5" marginBottom={3}>
              Фото
            </Typography>
            <ImageListApp images={property.photos} isPreviewImage />
          </Box>
        )}

        {Boolean(property.plans.length) && (
          <Box flex={"0 1 50%"}>
            <Typography variant="h5" marginBottom={3}>
              Планы
            </Typography>
            <ImageListApp images={property.plans} isPreviewImage />
          </Box>
        )}
      </Box>

      <ModalApp
        isOpen={openModal}
        handelCloseModal={onCloseModal}
        title={"Вы действительно хотите удалить объект?"}
        actions={
          <>
            <Button onClick={isArchive ? onDeleteArchive : onDeleteProperty} color="primary" autoFocus>
              Удалить
            </Button>
            <Button onClick={onCloseModal} color="secondary">
              Отмена
            </Button>
          </>
        }
      />
    </>
  );
};
