import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { IAddressProperty } from "../../../../shared/interfaces/form/addressFields";
import { LocationData } from "../../../../shared/components/location/LocationData";

export const AddressPropertyFields: FieldFormType<IAddressProperty>[] = [
  {
    name: "location",
    inputForm: <LocationData label="Локация" variant="outlined" />,
    rules: validateRequired(),
  },
];
