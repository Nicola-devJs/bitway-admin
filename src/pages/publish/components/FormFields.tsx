import { TextField, MenuItem } from "@mui/material";
import { TextareaApp } from "../../../shared/UI/textarea/TextareaApp";
import { optionsType, optionsCategory } from "../../../shared/constants/propertyFields";
import { IFieldValues } from "../../../shared/interfaces/property";
import { validateRequired } from "../../../shared/helpers/fieldsValidations";
import { FieldFormType, FormApp, FormHandlerType } from "../../../shared/components/form/FormApp";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormFields: FieldFormType<IFieldValues>[] = [
  // { name: "heading", inputForm: <TextField label="Heading" variant="outlined" />, rules: validateRequired() },
  // { name: "price", inputForm: <TextField label="Price" variant="outlined" type="number" /> },
  // { name: "square", inputForm: <TextField label="Square" variant="outlined" type="number" /> },
  {
    name: "type",
    inputForm: (
      <TextField label="Type property" variant="outlined" select>
        {optionsType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
  {
    name: "category",
    inputForm: (
      <TextField label="Category property" variant="outlined" select>
        {optionsCategory.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    ),
    rules: validateRequired(),
  },
  // { name: "description", inputForm: <TextareaApp placeholder="Description" /> },
];

export const AnnouncementTypeForm = () => {
  const { control, handleSubmit } = useForm<IFieldValues>();
  const formValuesAnnouncementTypeHandler = (data: IFieldValues) => {
    console.log(data);
  };

  return <FormApp fields={FormFields} control={control} />;
};
