import { MenuItem, TextField } from "@mui/material";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import {
  IObjectParamsApartments,
  IObjectParamsGarage,
  IObjectParamsHouse,
  IObjectParamsPlot,
} from "../../../../shared/interfaces/form/paramsFields";
import { optionsHouseStructure, optionsNumberRooms } from "../../constants/formFieldOptions";

export const ObjectParamsApartments: FieldFormType<IObjectParamsApartments>[] = [
  {
    name: "numberRooms",
    inputForm: (
      <TextField label="Number rooms" variant="outlined" select>
        {optionsNumberRooms.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
  {
    name: "generalArea",
    inputForm: <TextField label="Total area" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "livingArea",
    inputForm: <TextField label="Residential area" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export const ObjectParamsHouse: FieldFormType<IObjectParamsHouse>[] = [
  {
    name: "generalArea",
    inputForm: <TextField label="Plot area" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "livingArea",
    inputForm: <TextField label="House area" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "numberFloor",
    inputForm: <TextField label="Number floor" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "numberRooms",
    inputForm: <TextField label="Number rooms" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "typeStructure",
    inputForm: (
      <TextField label="House structure" variant="outlined" select>
        {optionsHouseStructure.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
];

export const ObjectParamsPlot: FieldFormType<IObjectParamsPlot>[] = [
  {
    name: "generalArea",
    inputForm: <TextField label="Plot area" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export const ObjectParamsGarage: FieldFormType<IObjectParamsGarage>[] = [
  {
    name: "generalArea",
    inputForm: <TextField label="Garage area" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];
