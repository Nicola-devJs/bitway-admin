import { NAVMENU } from "../constants/menu";
import { IPropertyCard } from "../interfaces/property";

export const writeUrlProperty = (
  id: string,
  setSuccessNotification: (text: string) => void,
  setErrorNotification: (text: string) => void
) => {
  const sharePropertyLink = `/${NAVMENU.PROPERTY}${id}`;

  navigator.clipboard
    .writeText(`${window.location.origin}${sharePropertyLink}`)
    .then(() => setSuccessNotification("Ссылка на объект недвижимости скопирована"))
    .catch(() => setErrorNotification("Упс, ссылка не скопировалась, попробуйте еще раз"));
};

export const getDetailsProperty = <T extends string>(
  property: IPropertyCard,
  fieldSet: { key: T; postfix?: string }[],
  localization: Record<T, string>
): [string, string][] => {
  const targetFields = fieldSet.reduce((target, field) => {
    const value = property[field.key as keyof IPropertyCard];
    if (value) {
      const stringConversionValue = Array.isArray(value) ? value.join(", ") : value;

      return { ...target, [localization[field.key]]: `${stringConversionValue} ${field.postfix || ""}`.trim() };
    }
    return target;
  }, {});

  return Object.entries(targetFields);
};
