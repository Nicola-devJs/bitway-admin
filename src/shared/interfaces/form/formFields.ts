import { IAddressApartments, IAddressObject } from "./addressFields";
import { IObjectParamsApartments, IObjectParamsGarage, IObjectParamsHouse, IObjectParamsPlot } from "./paramsFields";
import {
  IObjectFeaturesApartments,
  IObjectFeaturesGarage,
  IObjectFeaturesHouse,
  IObjectFeaturesPlot,
} from "./featuresFields";
import { OptionsCategoryValueKeys } from "../../../pages/publish/constants/formFieldOptions";

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

// TODO Написать условный generic тип исходя из значения category
type AddressApartments = IAnnouncementTypeFields["category"] extends "apartment" ? IAddressApartments : IAddressObject;

export type IFormFields = IAnnouncementTypeFields & IDescriptionFields & IPriceFields & AddressApartments;
