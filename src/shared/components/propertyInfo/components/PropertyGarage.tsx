import { FC } from "react";
import { GenericTypeFields, IFormFields } from "../../../interfaces/form/formFields";
import { Box, Typography } from "@mui/material";

interface IProps {
  property: IFormFields<GenericTypeFields.Garage>;
}

export const PropertyGarage: FC<IProps> = ({ property }) => {
  console.log(property);
  return (
    <Box>
      <Typography variant="h4">{property.heading}</Typography>
      <Typography variant="body1">{property.description}</Typography>
    </Box>
  );
};
