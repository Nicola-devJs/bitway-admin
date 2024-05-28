import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const PropertyGarage = (data: IFormFields<GenericTypeFields.Garage>) => {
  console.log(data);
  return <div>PropertyGarage</div>;
};
