import { IPropertyCard } from "../property";
import { GenericTypeFields } from "./formFields";

export const isApartmentProperty = (Property: IPropertyCard): Property is IPropertyCard<GenericTypeFields.Apartment> =>
  Property.category === "Квартира";

export const isHouseProperty = (Property: IPropertyCard): Property is IPropertyCard<GenericTypeFields.House> =>
  Property.category === "Дом";

export const isGarageProperty = (Property: IPropertyCard): Property is IPropertyCard<GenericTypeFields.Garage> =>
  Property.category === "Гараж";

export const isPlotProperty = (Property: IPropertyCard): Property is IPropertyCard<GenericTypeFields.Plot> =>
  Property.category === "Участок";
