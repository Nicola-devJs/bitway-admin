import { IFormFields } from "./form/formFields";

export interface IPropertyCard extends IFormFields {
  id: string;
}

export interface IResponseProperties {
  data: IPropertyCard[];
  first: number;
  last: number;
  items: number;
  pages: number;
  next: number;
  prev: number;
}