import { OptionsCategoryValueKeys } from "../../../shared/interfaces/form/formFields";
import * as FormFields from "./components/FormFields";

const ParamsFields = (value: OptionsCategoryValueKeys) => {
  switch (value) {
    case "Квартира":
      return FormFields.PropertyParamsApartments;
    case "Дом":
      return FormFields.PropertyParamsHouse;
    case "Участок":
      return FormFields.PropertyParamsPlot;
    case "Гараж":
      return FormFields.PropertyParamsGarage;
  }
};

const FeaturesFields = (value: OptionsCategoryValueKeys) => {
  switch (value) {
    case "Квартира":
      return FormFields.PropertyFeaturesApartments;

    case "Дом":
      return FormFields.PropertyFeaturesHouse;

    case "Участок":
      return FormFields.PropertyFeaturesPlot;

    case "Гараж":
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
