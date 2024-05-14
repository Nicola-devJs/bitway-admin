import React, { FC } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface IProps {
  list: React.ReactNode[] | undefined;
}

export const ListApp: FC<IProps> = ({ list }) => {
  return (
    <>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {list && list?.length ? (
          list.map((item, id) => (
            <Grid key={id} xs>
              {item}
            </Grid>
          ))
        ) : (
          <div>Empty data</div>
        )}
        {}
      </Grid>
    </>
  );
};
