import { OptionsCategoryValueKeys } from "../constants/formFieldOptions";
import * as FormFields from "./components/FormFields";

const AddressFields = (value: OptionsCategoryValueKeys) =>
  value === "apartment"
    ? [...FormFields.AddressObjectFields, ...FormFields.AddressApartmentsFields]
    : FormFields.AddressObjectFields;

const ParamsFields = (value: OptionsCategoryValueKeys) => {
  switch (value) {
    case "apartment":
      return FormFields.ObjectParamsApartments;
    case "house":
      return FormFields.ObjectParamsHouse;
    case "plot":
      return FormFields.ObjectParamsPlot;
    case "garage":
      return FormFields.ObjectParamsGarage;
  }
};

const FeaturesFields = (value: OptionsCategoryValueKeys) => {
  switch (value) {
    case "apartment":
      return FormFields.ObjectFeaturesApartments;
    case "house":
      return FormFields.ObjectFeaturesHouse;
    case "plot":
      return FormFields.ObjectFeaturesApartments;
    case "garage":
      return FormFields.ObjectFeaturesApartments;
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
  // { label: "Стоимость", fields: <div>step test Цена</div> },
];
