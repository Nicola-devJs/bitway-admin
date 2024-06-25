import { useState } from "react";
import { ListPropertyCards } from "../../shared/components/listProperties/ListPropertyCards";
import { Pagination } from "@mui/material";
import { useGetPropertiesAllQuery } from "../../redux/services/properties";

export const Properties = () => {
  const [page, setPage] = useState(1);
  const { data: properties, isFetching, error } = useGetPropertiesAllQuery();

  return (
    <div>
      <ListPropertyCards list={properties?.objects} loading={isFetching} error={error} />

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
