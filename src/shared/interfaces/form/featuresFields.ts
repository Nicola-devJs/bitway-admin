export interface IPropertyFeaturesApartments {
  renovation: string;
  parking: string;
  elevators: string;
  entrance: string[] | string;
}

export interface IPropertyFeaturesHouse {
  sewerage: string;
  waterSupply: string;
  gas: string;
  heating: string;
  electricity: string;
  additionally: string[];
}

export interface IPropertyFeaturesPlot {
  sewerage: string;
  waterSupply: string;
  gas: string;
  electricity: string;
}

export interface IPropertyFeaturesGarage {
  waterSupply: string;
  electricity: string;
}
