import { useLocation } from "react-router-dom";
import { useGetPropertyByIdQuery } from "../../redux/services/properties";

export const Property = () => {
  const { state } = useLocation();
  const { data: property } = useGetPropertyByIdQuery(state);
  console.log(property);
  return <div>Property</div>;
};
