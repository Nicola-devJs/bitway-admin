import { useContext, useEffect, useState } from "react";
import { PropertyCard } from "../card/PropertyCard";
import { IPropertyCard } from "../../interfaces/property";
import { SkeletonCard } from "../skeleton/SkeletonApp";
import { EmptyApp } from "../empty/EmptyApp";
import { Button, styled } from "@mui/material";
import { ErrorApp } from "../error/ErrorApp";
import { ModalApp } from "../../UI/modal/ModalApp";
import { SnackbarApp } from "../../UI/snackbar/Snackbar";
import { useAddArchiveMutation, useRemovePropertyMutation } from "../../../redux/services/properties";
import { NAVMENU } from "../../constants/menu";
import { BackdropContext } from "../../hoc/BackdropProvider";
import { IFormFields, GenericTypeFields } from "../../interfaces/form/formFields";

interface IProps {
  list: IPropertyCard[] | undefined;
  loading: boolean;
  error?: unknown;
}

const StyledList = styled("div")({
  display: "grid",
  grid: "auto / repeat(auto-fill, minmax(300px, 1.5fr))",
  gap: 10,
});

export const ListPropertyCards = ({ list, loading, error }: IProps) => {
  const [descriptionSnackbar, setDescriptionSnackbar] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [propertyId, setPropertyId] = useState<string | null>(null);

  const { toggleBackdrop } = useContext(BackdropContext);

  const [removePropertyAction, { isLoading }] = useRemovePropertyMutation();
  const [addArchiveAction, { isLoading: addArchiveLoading }] = useAddArchiveMutation();

  const clearDescriptionSnackbar = () => {
    setDescriptionSnackbar("");
  };

  const handleDeleteProperty = (id: string) => {
    setOpenModal(true);
    setPropertyId(id);
  };

  const handleAddArchive = (id: string, property: IFormFields<GenericTypeFields>) => {
    addArchiveAction({ id, body: property });
  };

  const hideModalHandler = () => {
    setOpenModal(false);
  };

  const writeUrlProperty = (id: string) => {
    const sharePropertyLink = `${NAVMENU.PROPERTY}${id}`;

    navigator.clipboard
      .writeText(window.location.href + sharePropertyLink)
      .then(() => setDescriptionSnackbar("Ссылка на объект недвижимости скопирована"))
      .catch(() => setDescriptionSnackbar("Упс, ссылка не скопировалась, попробуйте еще раз"));
  };

  const deleteProperty = () => {
    if (!propertyId) {
      return;
    }

    removePropertyAction(propertyId)
      .unwrap()
      .then(() => {
        setDescriptionSnackbar("Вы успешно удалили объект");
      })
      .catch(() => setDescriptionSnackbar("Ваш объект не удалился, попробуйте еще раз"))
      .finally(() => {
        hideModalHandler();
        setPropertyId(null);
      });
  };

  useEffect(() => {
    toggleBackdrop(isLoading || addArchiveLoading);
  }, [isLoading, addArchiveLoading]);

  return (
    <>
      {loading ? (
        <StyledList>
          {Array(10)
            .fill(" ")
            .map((_, id) => (
              <SkeletonCard key={id} />
            ))}
        </StyledList>
      ) : !list ? (
        <ErrorApp error={error} />
      ) : list.length === 0 ? (
        <EmptyApp />
      ) : (
        <StyledList>
          {list.map((item) => (
            <PropertyCard
              key={item._id}
              property={item}
              showModalDelete={handleDeleteProperty}
              showModalAddArchive={handleAddArchive}
              setShareUrlProperty={writeUrlProperty}
              redirectPathname={NAVMENU.PROPERTY}
            />
          ))}
        </StyledList>
      )}
      <ModalApp
        isOpen={openModal}
        handelCloseModal={hideModalHandler}
        title={"Вы действительно хотите удалить объект?"}
        actions={
          <>
            <Button onClick={deleteProperty} color="primary" autoFocus>
              Удалить
            </Button>
            <Button onClick={hideModalHandler} color="secondary">
              Отмена
            </Button>
          </>
        }
      />
      <SnackbarApp
        isOpen={!!descriptionSnackbar}
        handleClose={clearDescriptionSnackbar}
        description={descriptionSnackbar}
      />
    </>
  );
};
