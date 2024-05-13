import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { FC } from "react";

interface IProps {
  list: React.ReactNode[];
}

export const ListApp: FC<IProps> = ({ list }) => {
  const match = useMediaQuery("(max-width:768px)");
  console.log(match);
  return (
    <Grid container spacing={3}>
      {list.map((item, id) => (
        <Grid key={id} xs={3}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};
