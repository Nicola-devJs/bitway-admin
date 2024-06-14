import { optionsCategory, optionsTransactionType } from "../../pages/publish/constants/formFieldOptions";

export const getTargetCategory = (target: string, secondTarget?: string) => {
  return optionsCategory.find((cat) => cat.value === target || cat.value === secondTarget)?.label;
};

export const getTargetTransaction = (target: string) => {
  return optionsTransactionType.find((trans) => trans.value === target)?.label;
};
