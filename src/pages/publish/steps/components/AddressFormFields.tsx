import { TextField } from "@mui/material";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { optionsTypeStructure } from "../../constants/formFieldOptions";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { IAddressApartments, IAddressObject } from "../../../../shared/interfaces/form/addressFields";
import { SelectApp } from "../../../../shared/UI/select/SelectApp";

export const AddressApartmentsFields: FieldFormType<IAddressApartments>[] = [
  {
    name: "floor",
    inputForm: <TextField label="Floor" variant="outlined" type="number" />,
    rules: {
      validate: (value, fields) => {
        return +value > +fields.floorHouse ? "Этаж не может быть больше этажности дома" : true;
      },
      ...validateRequired(),
    },
  },
  {
    name: "floorHouse",
    inputForm: <TextField label="Floor house" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "number",
    inputForm: <TextField label="Number" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "typeStructure",
    inputForm: <SelectApp options={optionsTypeStructure} label="Тип здания" />,
    rules: validateRequired(),
  },
];

export const AddressObjectFields: FieldFormType<IAddressObject>[] = [
  {
    name: "location",
    inputForm: <TextField label="Location" variant="outlined" />,
    rules: validateRequired(),
  },
];
