export const optionsTransactionType = [
  { value: "rent", label: "Аренда" },
  { value: "buy", label: "Продажа" },
];

export const optionsPropertyType = [
  { value: "residential", label: "Жилая" },
  { value: "commercial", label: "Коммерческая" },
];

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

export const optionsParking = [
  { value: "Наземная", label: "Наземная" },
  { value: "Подземная", label: "Подземная" },
];

export const optionsHasAvailable = [
  { value: "Eсть", label: "Eсть" },
  { value: "Нет", label: "Нет" },
];

export const optionsSewerage = [
  { value: "Центральная", label: "Центральная" },
  { value: "Выгребная яма", label: "Выгребная яма" },
  { value: "Нет", label: "Нет" },
];

export const optionsWaterSupply = [
  { value: "Центральное", label: "Центральное" },
  { value: "Колодец", label: "Колодец" },
  { value: "Скважена", label: "Скважена" },
  { value: "Нет", label: "Нет" },
];

export const optionsHeating = [
  { value: "Газовое", label: "Газовое" },
  { value: "Электрическое", label: "Электрическое" },
  { value: "Нет", label: "Нет" },
];

export const optionsRenovation = [
  { value: "Евро", label: "Евро" },
  { value: "Косметический", label: "Косметический" },
  { value: "Дизайнерский", label: "Дизайнерский" },
  { value: "Без ремонта", label: "Без ремонта" },
];

export const optionsRegion = ["Тирасполь", "Бендеры", "Григориополь", "Рыбница", "Каменка", "Дубоссары"];

export const optionsAdditionally = ["Гараж", "Погреб", "Баня", "Терраса", "Полисадник", "Огород"];
