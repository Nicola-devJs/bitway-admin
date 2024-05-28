export interface IPropertyFeaturesMedia {
  photos: string[];
  plans: string[];
}

export interface IPropertyFeaturesApartments extends IPropertyFeaturesMedia {
  balconies: string;
  bathroom: string;
  renovation: string;
  parking: string;
  elevators: string;
  entrance: string[];
}

export interface IPropertyFeaturesHouse extends IPropertyFeaturesMedia {
  bathroom: string;
  sewerage: string;
  waterSupply: string;
  gas: string;
  heating: string;
  electricity: string;
  additionally: string[];
}

export interface IPropertyFeaturesPlot extends IPropertyFeaturesMedia {
  sewerage: string;
  waterSupply: string;
  gas: string;
  electricity: string;
}

export interface IPropertyFeaturesGarage extends IPropertyFeaturesMedia {
  waterSupply: string;
  electricity: string;
}
