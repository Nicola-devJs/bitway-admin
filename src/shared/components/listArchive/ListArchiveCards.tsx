import { useContext, useEffect, useState } from "react";
import { PropertyCard } from "../card/PropertyCard";
import { IPropertyCard } from "../../interfaces/property";
import { SkeletonCard } from "../skeleton/SkeletonApp";
import { EmptyApp } from "../empty/EmptyApp";
import { Button, styled } from "@mui/material";
import { ErrorApp } from "../error/ErrorApp";
import { ModalApp } from "../../UI/modal/ModalApp";
import { useRemoveArchiveMutation } from "../../../redux/services/properties";
import { NAVMENU } from "../../constants/menu";
import { BackdropContext } from "../../hoc/BackdropProvider";
import { useSetSnackbar } from "../../hooks/useSetSnackbar";
import { writeUrlProperty } from "../../helpers/others";

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

export const ListArchiveCards = ({ list, loading, error }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [propertyId, setPropertyId] = useState<string | null>(null);
  const { onErrorNotification, onSuccessNotification } = useSetSnackbar();
  const { toggleBackdrop } = useContext(BackdropContext);

  const [removeArchiveAction, { isLoading }] = useRemoveArchiveMutation();

  const handleDeleteArchive = (id: string) => {
    setOpenModal(true);
    setPropertyId(id);
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
      await removeArchiveAction(propertyId).unwrap();
      onSuccessNotification("Вы успешно удалили архив объекта");
    } catch (error) {
      onErrorNotification("Ваш архив объекта не удалился, попробуйте еще раз");
    } finally {
      hideModalHandler();
      setPropertyId(null);
    }
  };

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

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
              showModalDelete={handleDeleteArchive}
              setShareUrlProperty={onWriteUrlProperty}
              isArchive
            />
          ))}
        </StyledList>
      )}
      <ModalApp
        isOpen={openModal}
        handelCloseModal={hideModalHandler}
        title={"Вы действительно хотите удалить архив объекта?"}
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
