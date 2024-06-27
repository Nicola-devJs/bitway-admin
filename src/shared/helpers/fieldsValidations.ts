import { RegisterOptions } from "react-hook-form";

export const validateRequired = (message: string = "Обязательное поле"): RegisterOptions => {
  return { required: { value: true, message } };
};

export const validateTelegram = (): RegisterOptions => {
  return {
    validate: (value: string) => {
      return value && !value.startsWith("https://t.me/") ? "Некорректно введена ссылка на профиль" : true;
    },
  };
};

export const validateWhatsapp = (): RegisterOptions => {
  return {
    validate: (value: string) => {
      return value && !value.startsWith("https://wa.me/") ? "Некорректно введена ссылка на профиль" : true;
    },
  };
};
