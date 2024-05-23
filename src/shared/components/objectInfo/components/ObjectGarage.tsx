import React from "react";
import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const ObjectGarage = (data: IFormFields<GenericTypeFields.Garage>) => {
  console.log(data);
  return <div>ObjectGarage</div>;
};
