import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import {
  IPropertyFeaturesApartments,
  IPropertyFeaturesGarage,
  IPropertyFeaturesHouse,
  IPropertyFeaturesPlot,
} from "../../../../shared/interfaces/form/featuresFields";
import {
  optionsAdditionally,
  optionsEntrance,
  optionsHasAvailable,
  optionsHeating,
  optionsParking,
  optionsRenovation,
  optionsSewerage,
  optionsWaterSupply,
} from "../../constants/formFieldOptions";
import { ToggleButtons } from "../../../../shared/UI/toggleButtons/ToggleButtons";
import { SelectAutocompleteApp } from "../../../../shared/UI/selectAutocomplete/SelectAutocomplete";
import { SelectApp } from "../../../../shared/UI/select/SelectApp";

export const PropertyFeaturesApartments: FieldFormType<IPropertyFeaturesApartments>[] = [
  {
    name: "renovation",
    inputForm: <SelectApp options={optionsRenovation} label="Ремонт" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "entrance",
    inputForm: <ToggleButtons list={optionsEntrance} label="Entrance" color="primary" multiple />,
    rules: validateRequired(),
    defaultValue: [],
  },
  {
    name: "parking",
    inputForm: <ToggleButtons list={optionsParking} label="Parking" color="primary" />,
    rules: validateRequired(),
  },
];

export const PropertyFeaturesHouse: FieldFormType<IPropertyFeaturesHouse>[] = [
  {
    name: "sewerage",
    inputForm: <SelectApp options={optionsSewerage} label="Канализация" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "waterSupply",
    inputForm: <SelectApp options={optionsWaterSupply} label="Водоснабжение" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "heating",
    inputForm: <SelectApp options={optionsHeating} label="Отопление" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "gas",
    inputForm: <ToggleButtons list={optionsHasAvailable} label="Газ" color="primary" />,
    rules: validateRequired(),
  },
  {
    name: "electricity",
    inputForm: <ToggleButtons list={optionsHasAvailable} label="Электричество" color="primary" />,
    rules: validateRequired(),
  },
  {
    name: "additionally",
    inputForm: (
      <SelectAutocompleteApp options={optionsAdditionally} label="Дополнительно" variant="outlined" multiple />
    ),
    rules: validateRequired(),
    defaultValue: [],
  },
];

export const PropertyFeaturesPlot: FieldFormType<IPropertyFeaturesPlot>[] = [
  {
    name: "sewerage",
    inputForm: <SelectApp options={optionsSewerage} label="Канализация" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "waterSupply",
    inputForm: <SelectApp options={optionsWaterSupply} label="Водоснабжение" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "gas",
    inputForm: <ToggleButtons list={optionsHasAvailable} label="Газ" color="primary" />,
    rules: validateRequired(),
  },
  {
    name: "electricity",
    inputForm: <ToggleButtons list={optionsHasAvailable} label="Электричество" color="primary" />,
    rules: validateRequired(),
  },
];

export const PropertyFeaturesGarage: FieldFormType<IPropertyFeaturesGarage>[] = [
  {
    name: "waterSupply",
    inputForm: <SelectApp options={optionsWaterSupply} label="Водоснабжение" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "electricity",
    inputForm: <ToggleButtons list={optionsHasAvailable} label="Электричество" color="primary" />,
    rules: validateRequired(),
  },
];
