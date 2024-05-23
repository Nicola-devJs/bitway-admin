import { GenericTypeFields, IFormFields } from "./formFields";

export const isApartmentObject = (
  object: IFormFields<GenericTypeFields>
): object is IFormFields<GenericTypeFields.Apartment> => object.category === "apartment";

export const isHouseObject = (object: IFormFields<GenericTypeFields>): object is IFormFields<GenericTypeFields.House> =>
  object.category === "house";

export const isGarageObject = (
  object: IFormFields<GenericTypeFields>
): object is IFormFields<GenericTypeFields.Garage> => object.category === "garage";

export const isPlotObject = (object: IFormFields<GenericTypeFields>): object is IFormFields<GenericTypeFields.Plot> =>
  object.category === "plot";
