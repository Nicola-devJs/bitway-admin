import { useParams } from "react-router-dom";
import { useGetPropertyByIdQuery } from "../../redux/services/properties";
import { useContext, useEffect } from "react";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { PropertyInfo } from "../../shared/components/propertyInfo/PropertyInfo";

export const Property = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { id } = useParams<{ id: string }>();

  const { data: property, isLoading } = useGetPropertyByIdQuery(id!);

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  return <>{property ? <PropertyInfo property={property.object} /> : null}</>;
};
