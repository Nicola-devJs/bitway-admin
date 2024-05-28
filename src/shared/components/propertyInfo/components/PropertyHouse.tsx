import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const PropertyHouse = (data: IFormFields<GenericTypeFields.House>) => {
  console.log(data);
  return <div>PropertyHouse</div>;
};
