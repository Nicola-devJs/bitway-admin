import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const PropertyApartment = (data: IFormFields<GenericTypeFields.Apartment>) => {
  console.log(data);
  return <div>PropertyApartment</div>;
};
