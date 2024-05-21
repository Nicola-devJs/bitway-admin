import { TextField } from "@mui/material";
import { optionsTransactionType, optionsCategory, optionsObjectType } from "../../constants/formFieldOptions";
import {
  IAnnouncementTypeFields,
  IDescriptionFields,
  IPriceFields,
} from "../../../../shared/interfaces/form/formFields";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { TextareaApp } from "../../../../shared/UI/textarea/TextareaApp";
import { SelectApp } from "../../../../shared/UI/select/SelectApp";
export { AddressApartmentsFields, AddressObjectFields } from "./AddressFormFields";
export {
  ObjectParamsApartments,
  ObjectParamsGarage,
  ObjectParamsHouse,
  ObjectParamsPlot,
} from "./ObjectParamsFormFields";
export {
  ObjectFeaturesApartments,
  ObjectFeaturesHouse,
  ObjectFeaturesGarage,
  ObjectFeaturesPlot,
} from "./ObjectFeaturesFormFields";

const AnnouncementTypeFormFields: FieldFormType<IAnnouncementTypeFields>[] = [
  // { name: "price", inputForm: <TextField label="Price" variant="outlined" type="number" /> },
  {
    name: "typeTransaction",
    inputForm: <SelectApp options={optionsTransactionType} label="Тип предложения" />,
    rules: validateRequired(),
  },
  {
    name: "typeObject",
    inputForm: <SelectApp options={optionsObjectType} label="Тип объекта" />,
    rules: validateRequired(),
  },
  {
    name: "category",
    inputForm: <SelectApp options={optionsCategory as any} label="Категория объекта" />,
    rules: validateRequired(),
  },
];

const DescriptionFormFields: FieldFormType<IDescriptionFields>[] = [
  { name: "heading", inputForm: <TextField label="Heading" variant="outlined" />, rules: validateRequired() },
  { name: "description", inputForm: <TextareaApp placeholder="Description" /> },
];

const PriceFormFields: FieldFormType<IPriceFields>[] = [
  {
    name: "price",
    inputForm: <TextField label="Price" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "phone",
    inputForm: <TextField label="Phone" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export { AnnouncementTypeFormFields, DescriptionFormFields, PriceFormFields };
