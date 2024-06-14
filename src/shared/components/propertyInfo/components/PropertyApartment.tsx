import { FC } from "react";
import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";

interface IProps {
  property: IFormFields<GenericTypeFields.Apartment>;
}

export const PropertyApartment: FC<IProps> = ({ property }) => {
  console.log(property);
  return <div>PropertyApartment</div>;
};
