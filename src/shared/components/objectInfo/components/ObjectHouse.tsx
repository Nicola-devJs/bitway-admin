import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const ObjectHouse = (data: IFormFields<GenericTypeFields.House>) => {
  console.log(data);
  return <div>ObjectHouse</div>;
};
