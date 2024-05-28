import { IAddressApartments, IAddressProperty } from "./addressFields";
import {
  IPropertyParamsApartments,
  IPropertyParamsGarage,
  IPropertyParamsHouse,
  IPropertyParamsPlot,
} from "./paramsFields";
import {
  IPropertyFeaturesApartments,
  IPropertyFeaturesGarage,
  IPropertyFeaturesHouse,
  IPropertyFeaturesPlot,
} from "./featuresFields";
import { optionsCategory } from "../../../pages/publish/constants/formFieldOptions";

export interface IAnnouncementTypeFields {
  typeTransaction: string;
  typeProperty: string;
  category: OptionsCategoryValueKeys;
}
export interface IDescriptionFields {
  heading: string;
  description: string;
}

export interface IPriceFields {
  price: string;
  phone: string;
  messengers: string[];
}

export type OptionsCategoryValueKeys = (typeof optionsCategory)[number]["value"];

export enum GenericTypeFields {
  Apartment = "apartment",
  House = "house",
  Garage = "garage",
  Plot = "plot",
}

type UniqueTypeFields<T> = T extends GenericTypeFields.Apartment
  ? IAddressApartments & IPropertyParamsApartments & IPropertyFeaturesApartments
  : T extends GenericTypeFields.House
  ? IAddressProperty & IPropertyParamsHouse & IPropertyFeaturesHouse
  : T extends GenericTypeFields.Garage
  ? IAddressProperty & IPropertyParamsGarage & IPropertyFeaturesGarage
  : T extends GenericTypeFields.Plot
  ? IAddressProperty & IPropertyParamsPlot & IPropertyFeaturesPlot
  : never;

export type IFormFields<T extends GenericTypeFields> = IAnnouncementTypeFields &
  IDescriptionFields &
  IPriceFields &
  UniqueTypeFields<T>;
