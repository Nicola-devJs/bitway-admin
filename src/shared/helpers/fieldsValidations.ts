import { RegisterOptions } from "react-hook-form";

export const validateRequired = (message: string = "Обязательное поле"): RegisterOptions => {
  return { required: { value: true, message } };
};
