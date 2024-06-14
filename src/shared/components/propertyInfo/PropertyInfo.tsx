import { GenericTypeFields, IFormFields } from "../../interfaces/form/formFields";
import {
  isPlotProperty,
  isApartmentProperty,
  isGarageProperty,
  isHouseProperty,
} from "../../interfaces/form/typeGuards";
import { PropertyPlot } from "./components/PropertyPlot";
import { PropertyApartment } from "./components/PropertyApartment";
import { PropertyHouse } from "./components/PropertyHouse";
import { PropertyGarage } from "./components/PropertyGarage";
import { FC } from "react";

interface IProps {
  property: IFormFields<GenericTypeFields>;
}

export const PropertyInfo: FC<IProps> = ({ property }) => {
  if (isApartmentProperty(property)) {
    return <PropertyApartment property={property} />;
  }

  if (isHouseProperty(property)) {
    return <PropertyHouse property={property} />;
  }

  if (isPlotProperty(property)) {
    return <PropertyPlot property={property} />;
  }

  if (isGarageProperty(property)) {
    return <PropertyGarage property={property} />;
  }
};
