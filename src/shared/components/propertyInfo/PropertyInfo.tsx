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

export const PropertyInfo = (data: IFormFields<GenericTypeFields>) => {
  if (isApartmentProperty(data)) {
    return <PropertyApartment {...data} />;
  }

  if (isHouseProperty(data)) {
    return <PropertyHouse {...data} />;
  }

  if (isPlotProperty(data)) {
    return <PropertyPlot {...data} />;
  }

  if (isGarageProperty(data)) {
    return <PropertyGarage {...data} />;
  }
};
