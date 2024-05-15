import { useParams } from "react-router-dom";
import { useGetPropertyByIdQuery } from "../../redux/services/properties";
import { useContext, useEffect } from "react";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";

export const Property = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { id } = useParams<{ id: string }>();
  const { data: property, isLoading } = useGetPropertyByIdQuery(Number(id));

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  return <div>Property</div>;
};
