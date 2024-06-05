import { useRef, useState } from "react";
import { ListPropertyCards } from "../../shared/components/list/ListPropertyCards";
import { Pagination } from "@mui/material";
import { useGetPropertiesAllQuery } from "../../redux/services/properties";

// TODO Исправить баг с пагинацией при удалении последнего элемента на последней странице

export const Properties = () => {
  const containerListRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const { data: properties, isFetching, error } = useGetPropertiesAllQuery();

  return (
    <div ref={containerListRef}>
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
