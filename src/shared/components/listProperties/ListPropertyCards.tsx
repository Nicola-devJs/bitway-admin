import { useContext, useEffect, useState } from "react";
import { PropertyCard } from "../card/PropertyCard";
import { IPropertyCard } from "../../interfaces/property";
import { SkeletonCard } from "../skeleton/SkeletonApp";
import { EmptyApp } from "../empty/EmptyApp";
import { Button, styled } from "@mui/material";
import { ErrorApp } from "../error/ErrorApp";
import { ModalApp } from "../../UI/modal/ModalApp";
import { useAddArchiveMutation, useRemovePropertyMutation } from "../../../redux/services/properties";
import { NAVMENU } from "../../constants/menu";
import { BackdropContext } from "../../hoc/BackdropProvider";
import { writeUrlProperty } from "../../helpers/others";
import { useSetSnackbar } from "../../hooks/useSetSnackbar";

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
  const [openModal, setOpenModal] = useState(false);
  const [propertyId, setPropertyId] = useState<string | null>(null);
  const { toggleBackdrop } = useContext(BackdropContext);
  const { onErrorNotification, onSuccessNotification } = useSetSnackbar();
  const [removePropertyAction, { isLoading }] = useRemovePropertyMutation();
  const [addArchiveAction, { isLoading: addArchiveLoading }] = useAddArchiveMutation();

  const handleDeleteProperty = (id: string) => {
    setOpenModal(true);
    setPropertyId(id);
  };

  const handleAddArchive = async (id: string, property: IPropertyCard) => {
    try {
      await addArchiveAction({ id, body: property }).unwrap();
      onSuccessNotification("Вы успешно добавили объект в архив");
    } catch (error) {
      onErrorNotification("Ваш объект не добавился в архив, попробуйте еще раз");
    }
  };

  const hideModalHandler = () => {
    setOpenModal(false);
  };

  const onWriteUrlProperty = (id: string) => {
    writeUrlProperty(id, onSuccessNotification, onErrorNotification);
  };

  const deleteProperty = async () => {
    if (!propertyId) {
      return;
    }

    try {
      await removePropertyAction(propertyId).unwrap();
      onSuccessNotification("Вы успешно удалили объект");
    } catch (error) {
      onErrorNotification("Ваш объект не удалился, попробуйте еще раз");
    } finally {
      hideModalHandler();
      setPropertyId(null);
    }
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
              setShareUrlProperty={onWriteUrlProperty}
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
    </>
  );
};
