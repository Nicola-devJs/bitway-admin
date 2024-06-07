import { FieldValues, UseFormReset } from "react-hook-form";

export const resetUnnecessaryFieldsForm = <T extends FieldValues>(
  object: T,
  unnecessaryFields: string[],
  reset: UseFormReset<T>
) => {
  const clearObject = Object.keys(object).reduce((clearObject, key) => {
    return { ...clearObject, [key]: unnecessaryFields.includes(key) ? object[key] : undefined };
  }, {});

  reset(clearObject as T);
};
