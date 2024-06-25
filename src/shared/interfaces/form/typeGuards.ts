import { GenericTypeFields, IFormFields } from "./formFields";

export const isApartmentProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.Apartment> => Property.category === "Квартира";

export const isHouseProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.House> => Property.category === "Дом";

export const isGarageProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.Garage> => Property.category === "Гараж";

export const isPlotProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.Plot> => Property.category === "Участок";
