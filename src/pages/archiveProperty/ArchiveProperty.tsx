import { useParams } from "react-router-dom";
import { useGetArchiveByIdQuery } from "../../redux/services/properties";
import { useContext, useEffect } from "react";
import { BackdropContext } from "../../shared/hoc/BackdropProvider";
import { PropertyInfo } from "../../shared/components/propertyInfo/PropertyInfo";

export const ArchiveProperty = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { id } = useParams<{ id: string }>();

  const { data: property, isLoading } = useGetArchiveByIdQuery(id!);

  useEffect(() => {
    toggleBackdrop(isLoading);
  }, [isLoading]);

  return <>{property ? <PropertyInfo property={property.object} isArchive /> : null}</>;
};
