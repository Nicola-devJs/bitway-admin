import { TextField, MenuItem } from "@mui/material";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { optionsTypeStructure } from "../../constants/formFieldOptions";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { IAddressApartments, IAddressObject } from "../../../../shared/interfaces/form/addressFields";
import { YMapApp } from "../../../../shared/UI/map/YMapApp";

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
    inputForm: (
      <TextField label="Type structure" variant="outlined" select>
        {optionsTypeStructure.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
];

export const AddressObjectFields: FieldFormType<IAddressObject>[] = [
  {
    name: "location",
    inputForm: <TextField label="Location" variant="outlined" />,
    rules: validateRequired(),
  },
  {
    name: "coordinates",
    inputForm: <YMapApp />,
  },
];
