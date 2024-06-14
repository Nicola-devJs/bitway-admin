import { FC } from "react";
import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

interface IProps {
  property: IFormFields<GenericTypeFields.Plot>;
}

export const PropertyPlot: FC<IProps> = ({ property }) => {
  console.log(property);
  return <div>PropertyPlot</div>;
};
