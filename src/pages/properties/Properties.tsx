import { useEffect, useRef, useState } from "react";
import { ListPropertyCards } from "../../shared/components/list/ListPropertyCards";
import { Pagination } from "@mui/material";
import { useGetPropertiesAllQuery } from "../../redux/services/properties";

const minWidthColumn = 277;

// TODO Исправить баг с пагинацией при удалении последнего элемента на последней странице

export const Properties = () => {
  const containerListRef = useRef<HTMLDivElement>(null);
  const [countColumns, setCountColumns] = useState(1);
  const [page, setPage] = useState(1);
  const { data: properties, isFetching } = useGetPropertiesAllQuery({ page, limit: countColumns * 2 });

  useEffect(() => {
    if (containerListRef.current) {
      setCountColumns(Math.floor(containerListRef.current.offsetWidth / minWidthColumn) || 1);
    }
  }, [containerListRef]);

  return (
    <div ref={containerListRef}>
      <ListPropertyCards list={properties?.data} countColumns={countColumns} loading={isFetching} />

      {properties && properties.pages ? (
        <Pagination
          count={properties.pages}
          page={page}
          onChange={(_, pageNumber) => setPage(pageNumber)}
          color="primary"
          sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}
        />
      ) : null}
    </div>
  );
};
