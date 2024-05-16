export interface IFieldValues {
  heading: string;
  description: string;
  price: string;
  square: string;
  type: string;
  category: string;
}

export interface IPropertyCard extends IFieldValues {
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
