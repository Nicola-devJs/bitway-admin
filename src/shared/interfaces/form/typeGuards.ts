import { GenericTypeFields, IFormFields } from "./formFields";

export const isApartmentProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.Apartment> => Property.category === "apartment";

export const isHouseProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.House> => Property.category === "house";

export const isGarageProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.Garage> => Property.category === "garage";

export const isPlotProperty = (
  Property: IFormFields<GenericTypeFields>
): Property is IFormFields<GenericTypeFields.Plot> => Property.category === "plot";
