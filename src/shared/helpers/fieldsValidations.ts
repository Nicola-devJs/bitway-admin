import { RegisterOptions } from "react-hook-form";

export const validateRequired = (message: string = "Обязательное поле"): RegisterOptions => {
  return {
    required: { value: true, message },
    validate: (value: string) => {
      if (isNaN(+value)) {
        return true;
      }
      if (+value < 0) {
        return "Значение не может быть меньше нуля";
      }
      return true;
    },
  };
};

export const validatePhone = (requiredMessage: string = "Обязательное поле"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  validate: (value: string = "") => {
    const resultResponse = value.length > 12 ? `больше на ${value.length - 12}` : `меньше на ${12 - value.length}`;
    return !value.startsWith("+")
      ? "Номер должен начинаться с +"
      : !value || !/^\+\d{11}$/.test(value)
      ? `Не корректный телефон, ${resultResponse} символов`
      : true;
  },
});

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
