export const optionsTransactionType = [
  { value: "rent", label: "Аренда" },
  { value: "buy", label: "Продажа" },
] as const;

export const optionsObjectType = [
  { value: "residential", label: "Жилая" },
  { value: "commercial", label: "Коммерческая" },
] as const;

export const optionsCategory = [
  { value: "apartment", label: "Квартира" },
  { value: "house", label: "Дом" },
  { value: "garage", label: "Гараж" },
  { value: "plot", label: "Участок" },
] as const;

export const optionsTypeStructure = [
  { value: "brick", label: "Кирпичный" },
  { value: "monolithic", label: "Монолитный" },
  { value: "paneled", label: "Панельный" },
];

export const optionsNumberRooms = [
  { value: "studia", label: "Студия" },
  { value: "1", label: "Однокомнатная" },
  { value: "2", label: "Двухкомнатная" },
  { value: "3", label: "Трехкомнатная" },
];

export const optionsHouseStructure = [
  { value: "brick", label: "Кирпичный" },
  { value: "stone", label: "Каменный" },
  { value: "aeratedConcreteBlock", label: "Газобетонный блок" },
];

export const optionsEntrance = [
  { value: "ramp", label: "Пандус" },
  { value: "garbageСhute", label: "Мусоропровод" },
];

export const optionsAdditionally = [
  { value: "garage", label: "Гараж" },
  { value: "cellar", label: "Погреб" },
  { value: "bathhouse", label: "Баня" },
  { value: "terrace", label: "Терраса" },
  { value: "garden", label: "Полисадник" },
  { value: "vegetableGarden", label: "Огород" },
];

export type OptionsCategoryValueKeys = (typeof optionsCategory)[number]["value"];
//? export type OptionsTypeValueKeys = (typeof optionsTransactionType)[number]["value"];
