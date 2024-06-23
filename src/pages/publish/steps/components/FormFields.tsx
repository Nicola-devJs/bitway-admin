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
import { UploadApp } from "../../../../shared/UI/upload/UploadApp";
export { AddressPropertyFields } from "./AddressFormFields";
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
  { name: "heading", inputForm: <TextField label="Заголовок" variant="outlined" />, rules: validateRequired() },
  { name: "description", inputForm: <TextareaApp placeholder="Описание" /> },
  {
    name: "photos",
    inputForm: <UploadApp label="Галерея" />,
    defaultValue: [],
  },
  {
    name: "plans",
    inputForm: <UploadApp label="Планы" />,
    defaultValue: [],
  },
];

const PriceFormFields: FieldFormType<IPriceFields>[] = [
  {
    name: "price",
    inputForm: <TextField label="Стоимость" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
  {
    name: "phone",
    inputForm: <TextField label="Контактный телефон" variant="outlined" type="number" />,
    rules: validateRequired(),
  },
];

export const AnnouncementTypeFormFieldsName = AnnouncementTypeFormFields.map((filed) => filed.name);

export { AnnouncementTypeFormFields, DescriptionFormFields, PriceFormFields };
