import { IAddressApartments, IAddressObject } from "./addressFields";
import { IObjectParamsApartments, IObjectParamsGarage, IObjectParamsHouse, IObjectParamsPlot } from "./paramsFields";
import {
  IObjectFeaturesApartments,
  IObjectFeaturesGarage,
  IObjectFeaturesHouse,
  IObjectFeaturesPlot,
} from "./featuresFields";
import { optionsCategory } from "../../../pages/publish/constants/formFieldOptions";

export interface IAnnouncementTypeFields {
  typeTransaction: string;
  typeObject: string;
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
  ? IAddressApartments & IObjectParamsApartments & IObjectFeaturesApartments
  : T extends GenericTypeFields.House
  ? IAddressObject & IObjectParamsHouse & IObjectFeaturesHouse
  : T extends GenericTypeFields.Garage
  ? IAddressObject & IObjectParamsGarage & IObjectFeaturesGarage
  : T extends GenericTypeFields.Plot
  ? IAddressObject & IObjectParamsPlot & IObjectFeaturesPlot
  : never;

export type IFormFields<T extends GenericTypeFields> = IAnnouncementTypeFields &
  IDescriptionFields &
  IPriceFields &
  UniqueTypeFields<T>;
