import { TextField } from "@mui/material";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { IAddressProperty } from "../../../../shared/interfaces/form/addressFields";

export const AddressPropertyFields: FieldFormType<IAddressProperty>[] = [
  {
    name: "location",
    inputForm: <TextField label="Location" variant="outlined" />,
    rules: validateRequired(),
  },
];
