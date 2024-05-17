export interface IObjectFeaturesApartments {
  balconies: string;
  bathroom: string[];
  renovation: string;
  parking: string;
  elevators: string;
  entrance: string;
}

export interface IObjectFeaturesHouse {
  bathroom: string[];
  sewerage: string;
  waterSupply: string;
  gas: string;
  heating: string;
  electricity: string;
  additionally: string[];
}

export interface IObjectFeaturesPlot {
  sewerage: string;
  waterSupply: string;
  gas: string;
  electricity: string;
}

export interface IObjectFeaturesGarage {
  waterSupply: string;
  electricity: string;
}
