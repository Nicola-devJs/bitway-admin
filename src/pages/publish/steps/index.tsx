import { FieldFormType } from "../../../shared/components/form/FormApp";
import { OptionsCategoryValueKeys } from "../../../shared/interfaces/form/formFields";
import * as FormFields from "./components/FormFields";

const AddressFields = (value: OptionsCategoryValueKeys) =>
  value === "apartment"
    ? [...FormFields.AddressPropertyFields, ...FormFields.AddressApartmentsFields]
    : FormFields.AddressPropertyFields;

const ParamsFields = (value: OptionsCategoryValueKeys) => {
  switch (value) {
    case "apartment":
      return FormFields.PropertyParamsApartments;
    case "house":
      return FormFields.PropertyParamsHouse;
    case "plot":
      return FormFields.PropertyParamsPlot;
    case "garage":
      return FormFields.PropertyParamsGarage;
  }
};

const FeaturesFields = (value: OptionsCategoryValueKeys) => {
  switch (value) {
    case "apartment":
      return FormFields.PropertyFeaturesApartments;

    case "house":
      return FormFields.PropertyFeaturesHouse;

    case "plot":
      return FormFields.PropertyFeaturesPlot;

    case "garage":
      return FormFields.PropertyFeaturesGarage;
  }
};

export const getFormSteps = (value: OptionsCategoryValueKeys) => [
  {
    label: "Тип объявления",
    fields: FormFields.AnnouncementTypeFormFields,
  },
  { label: "Адрес", fields: AddressFields(value) },
  { label: "Параметры", fields: ParamsFields(value) },
  { label: "Особенности", fields: FeaturesFields(value) },

  { label: "Описание", fields: FormFields.DescriptionFormFields },
  { label: "Стоимость", fields: FormFields.PriceFormFields },
  { label: "Презентация" },
];
