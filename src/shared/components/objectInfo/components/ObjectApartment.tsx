import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const ObjectApartment = (data: IFormFields<GenericTypeFields.Apartment>) => {
  console.log(data);
  return <div>ObjectApartment</div>;
};
