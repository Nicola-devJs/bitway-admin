import { TextField } from "@mui/material";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import {
  IPropertyParamsApartments,
  IPropertyParamsGarage,
  IPropertyParamsHouse,
  IPropertyParamsPlot,
} from "../../../../shared/interfaces/form/paramsFields";
import { optionsHouseStructure, optionsNumberRooms, optionsTypeStructure } from "../../constants/formFieldOptions";
import { SelectApp } from "../../../../shared/UI/select/SelectApp";

export const PropertyParamsApartments: FieldFormType<IPropertyParamsApartments>[] = [
  {
    name: "floor",
    inputForm: <TextField label="Этаж" variant="outlined" type="number" />,
    rules: {
      validate: (value, fields) => {
        return +value > +fields.floorHouse ? "Этаж не может быть больше этажности дома" : true;
      },
      ...validateRequired(),
    },
  },
  {
    name: "floorHouse",
    inputForm: <TextField label="Этажность дома" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "number",
    inputForm: <TextField label="Номер квартиры" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "typeStructure",
    inputForm: <SelectApp options={optionsTypeStructure} label="Тип здания" />,
    rules: validateRequired(),
  },
  {
    name: "numberRooms",
    inputForm: <SelectApp options={optionsNumberRooms} label="Кол-во комнат" />,
    rules: validateRequired(),
  },
  {
    name: "generalArea",
    inputForm: <TextField label="Общая площадь, м²" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "livingArea",
    inputForm: <TextField label="Жилая площадь, м²" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "balconies",
    inputForm: <TextField label="Балконы" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "bathroom",
    inputForm: <TextField label="Ванная комната" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export const PropertyParamsHouse: FieldFormType<IPropertyParamsHouse>[] = [
  {
    name: "generalArea",
    inputForm: <TextField label="Общая площадь, м²" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "livingArea",
    inputForm: <TextField label="Жилая площадь, м²" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "numberFloor",
    inputForm: <TextField label="Этажность" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "numberRooms",
    inputForm: <TextField label="Кол-во комнат" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "typeStructure",
    inputForm: <SelectApp options={optionsHouseStructure} label="Тип строения" />,
    rules: validateRequired(),
  },
  {
    name: "bathroom",
    inputForm: <TextField label="Ванная комната" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export const PropertyParamsPlot: FieldFormType<IPropertyParamsPlot>[] = [
  {
    name: "generalArea",
    inputForm: <TextField label="Общая площадь, м²" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export const PropertyParamsGarage: FieldFormType<IPropertyParamsGarage>[] = [
  {
    name: "generalArea",
    inputForm: <TextField label="Общая площадь, м²" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];
