type Option = {
  value: string | number;
  label: string;
};

export const optionsType: Option[] = [
  { value: "rent", label: "Аренда" },
  { value: "buy", label: "Продажа" },
];

export const optionsCategory: Option[] = [
  { value: "apartment", label: "Квартира" },
  { value: "house", label: "Дом" },
  { value: "garage", label: "Гараж" },
  { value: "place", label: "Участок" },
];
