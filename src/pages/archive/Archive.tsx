import { Pagination } from "@mui/material";
import { useState } from "react";
import { useGetArchiveAllQuery } from "../../redux/services/properties";
import { ListArchiveCards } from "../../shared/components/listArchive/ListArchiveCards";

export const Archive = () => {
  const [page, setPage] = useState(1);
  const { data: properties, isFetching, error } = useGetArchiveAllQuery();

  return (
    <div>
      <ListArchiveCards list={properties?.objects} loading={isFetching} error={error} />

      {properties && properties.amountPages ? (
        <Pagination
          count={properties.amountPages}
          page={page}
          onChange={(_, pageNumber) => setPage(pageNumber)}
          color="primary"
          sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}
        />
      ) : null}
    </div>
  );
};
