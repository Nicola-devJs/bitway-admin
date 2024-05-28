import { TextField } from "@mui/material";
import { optionsTransactionType, optionsCategory, optionsPropertyType } from "../../constants/formFieldOptions";
import {
  IAnnouncementTypeFields,
  IDescriptionFields,
  IPriceFields,
} from "../../../../shared/interfaces/form/formFields";
import { validateRequired } from "../../../../shared/helpers/fieldsValidations";
import { FieldFormType } from "../../../../shared/components/form/FormApp";
import { TextareaApp } from "../../../../shared/UI/textarea/TextareaApp";
import { SelectApp } from "../../../../shared/UI/select/SelectApp";
export { AddressApartmentsFields, AddressPropertyFields } from "./AddressFormFields";
export {
  PropertyParamsApartments,
  PropertyParamsGarage,
  PropertyParamsHouse,
  PropertyParamsPlot,
} from "./PropertyParamsFormFields";
export {
  PropertyFeaturesApartments,
  PropertyFeaturesHouse,
  PropertyFeaturesGarage,
  PropertyFeaturesPlot,
} from "./PropertyFeaturesFormFields";

const AnnouncementTypeFormFields: FieldFormType<IAnnouncementTypeFields>[] = [
  {
    name: "typeTransaction",
    inputForm: <SelectApp options={optionsTransactionType} label="Тип предложения" />,
    rules: validateRequired(),
  },
  {
    name: "typeProperty",
    inputForm: <SelectApp options={optionsPropertyType} label="Тип объекта" />,
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

export const AnnouncementTypeFormFieldsName = AnnouncementTypeFormFields.map((filed) => filed.name);

export { AnnouncementTypeFormFields, DescriptionFormFields, PriceFormFields };
