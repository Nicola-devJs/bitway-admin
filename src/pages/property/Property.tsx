import { useParams } from "react-router-dom";
import { useGetPropertyByIdQuery } from "../../redux/services/properties";
import { useContext, useEffect } from "react";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";

export const Property = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { data: property, isLoading } = useGetPropertyByIdQuery(id);

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  return <div>Property</div>;
};
