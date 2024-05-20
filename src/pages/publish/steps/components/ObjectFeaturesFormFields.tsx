import { TextField } from "@mui/material";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { IObjectFeaturesApartments, IObjectFeaturesHouse } from "../../../../shared/interfaces/form/featuresFields";
import { optionsAdditionally, optionsEntrance } from "../../constants/formFieldOptions";
import { ToggleButtons } from "../../../../shared/UI/toggleButtons/ToggleButtons";
import { SelectAutocompleteApp } from "../../../../shared/UI/selectAutocomplete/SelectAutocomplete";

export const ObjectFeaturesApartments: FieldFormType<IObjectFeaturesApartments>[] = [
  {
    name: "balconies",
    inputForm: <TextField label="Balconies" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "entrance",
    inputForm: <ToggleButtons list={optionsEntrance} label="Entrance" color="primary" />,
    rules: validateRequired(),
  },
];

export const ObjectFeaturesHouse: FieldFormType<IObjectFeaturesHouse>[] = [
  {
    name: "additionally",
    inputForm: <SelectAutocompleteApp options={optionsAdditionally} label="Аdditionally" variant="outlined" multiple />,
    rules: validateRequired(),
    defaultValue: [],
  },
];
