import { AnnouncementTypeForm } from "./FormFields";

export const useGetFormSteps = () => {
  return [
    {
      label: "Тип объявления",
      body: <AnnouncementTypeForm />,
    },
    { label: "Адрес", body: <div>step test Адрес</div> },
    { label: "Параметры", body: <div>step test Параметры</div> },
    { label: "Особенности", body: <div>step test Особенности</div> },
    { label: "Описание", body: <div>step test Описание</div> },
    { label: "Стоимость", body: <div>step test Цена</div> },
  ];
};
