import { TextField, MenuItem } from "@mui/material";
import { optionsTransactionType, optionsCategory, optionsObjectType } from "../../constants/formFieldOptions";
import { IAnnouncementTypeFields, IDescriptionFields } from "../../../../shared/interfaces/form/formFields";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { TextareaApp } from "../../../../shared/UI/textarea/TextareaApp";
export { AddressApartmentsFields, AddressObjectFields } from "./AddressFormFields";
export {
  ObjectParamsApartments,
  ObjectParamsGarage,
  ObjectParamsHouse,
  ObjectParamsPlot,
} from "./ObjectParamsFormFields";
export { ObjectFeaturesApartments, ObjectFeaturesHouse } from "./ObjectFeaturesFormFields";

const AnnouncementTypeFormFields: FieldFormType<IAnnouncementTypeFields>[] = [
  // { name: "price", inputForm: <TextField label="Price" variant="outlined" type="number" /> },
  // { name: "square", inputForm: <TextField label="Square" variant="outlined" type="number" /> },
  {
    name: "typeTransaction",
    inputForm: (
      <TextField label="Type transaction" variant="outlined" select>
        {optionsTransactionType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
  {
    name: "typeObject",
    inputForm: (
      <TextField label="Type object" variant="outlined" select>
        {optionsObjectType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
  {
    name: "category",
    inputForm: (
      <TextField label="Category property" variant="outlined" select>
        {optionsCategory.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
];

const DescriptionFormFields: FieldFormType<IDescriptionFields>[] = [
  { name: "heading", inputForm: <TextField label="Heading" variant="outlined" />, rules: validateRequired() },
  { name: "description", inputForm: <TextareaApp placeholder="Description" /> },
];

export { AnnouncementTypeFormFields, DescriptionFormFields };
