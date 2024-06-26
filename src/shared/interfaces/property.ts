import { Status } from "../constants/status";
import { GenericTypeFields, IFormFields } from "./form/formFields";

export type IPropertyCard<T extends GenericTypeFields = GenericTypeFields> = {
  _id: string;
} & IFormFields<T>;

export interface IResponseProperty {
  object: IPropertyCard;
  status: Status;
}

export interface IResponseProperties {
  objects: IPropertyCard[];
  page: number;
  amountPages: number;
  limit: number;
}

export interface ILocationData {
  location: Record<string, string[]>;
  status: Status;
}
