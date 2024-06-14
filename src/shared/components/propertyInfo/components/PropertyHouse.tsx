import { FC } from "react";
import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

interface IProps {
  property: IFormFields<GenericTypeFields.House>;
}

export const PropertyHouse: FC<IProps> = ({ property }) => {
  console.log(property);
  return <div>PropertyHouse</div>;
};
