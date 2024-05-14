import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextareaApp } from "../../shared/UI/textarea/TextareaApp";

export const Publish = () => {
  return (
    <Grid container component={"form"} sx={{ flexDirection: "column" }} rowGap={2}>
      <TextField id="outlined-basic" label="Heading" variant="outlined" />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <TextareaApp />
      <Button variant="contained">Submit</Button>
    </Grid>
  );
};
