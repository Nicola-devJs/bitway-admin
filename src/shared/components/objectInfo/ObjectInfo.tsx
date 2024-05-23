import { GenericTypeFields, IFormFields } from "../../interfaces/form/formFields";
import { isPlotObject, isApartmentObject, isGarageObject, isHouseObject } from "../../interfaces/form/typeGuards";
import { ObjectPlot } from "./components/ObjectPlot";
import { ObjectApartment } from "./components/ObjectApartment";
import { ObjectHouse } from "./components/ObjectHouse";
import { ObjectGarage } from "./components/ObjectGarage";

export const ObjectInfo = (data: IFormFields<GenericTypeFields>) => {
  if (isApartmentObject(data)) {
    return <ObjectApartment {...data} />;
  }

  if (isHouseObject(data)) {
    return <ObjectHouse {...data} />;
  }

  if (isPlotObject(data)) {
    return <ObjectPlot {...data} />;
  }

  if (isGarageObject(data)) {
    return <ObjectGarage {...data} />;
  }
};
