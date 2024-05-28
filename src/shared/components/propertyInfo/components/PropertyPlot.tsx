import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

export const PropertyPlot = (data: IFormFields<GenericTypeFields.Plot>) => {
  console.log(data);
  return <div>PropertyPlot</div>;
};
