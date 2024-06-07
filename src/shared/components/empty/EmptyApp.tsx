import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { Box } from "@mui/material";

export const EmptyApp = () => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100%"}>
      <HourglassEmptyIcon /> У вас нет недвижимости
    </Box>
  );
};
