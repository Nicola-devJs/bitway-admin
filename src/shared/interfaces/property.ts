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
