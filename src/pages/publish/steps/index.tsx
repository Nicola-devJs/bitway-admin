import { OptionsCategoryValueKeys } from "../../../shared/interfaces/form/formFields";
import * as FormFields from "./components/FormFields";

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
  { label: "Адрес", fields: FormFields.AddressPropertyFields },
  { label: "Параметры", fields: ParamsFields(value) },
  { label: "Особенности", fields: FeaturesFields(value) },

  { label: "Описание", fields: FormFields.DescriptionFormFields },
  { label: "Дополнительная информация", fields: FormFields.PriceFormFields },
  { label: "Презентация" },
];
