interface IObjectFeaturesMedia {
  photos: string[];
  plans: string[];
}

export interface IObjectFeaturesApartments extends IObjectFeaturesMedia {
  balconies: string;
  bathroom: string;
  renovation: string;
  parking: string;
  elevators: string;
  entrance: string[];
}

export interface IObjectFeaturesHouse extends IObjectFeaturesMedia {
  bathroom: string;
  sewerage: string;
  waterSupply: string;
  gas: string;
  heating: string;
  electricity: string;
  additionally: string[];
}

export interface IObjectFeaturesPlot extends IObjectFeaturesMedia {
  sewerage: string;
  waterSupply: string;
  gas: string;
  electricity: string;
}

export interface IObjectFeaturesGarage extends IObjectFeaturesMedia {
  waterSupply: string;
  electricity: string;
}
