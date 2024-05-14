import { useState } from "react";
import { PropertyCard } from "../../shared/components/card/PropertyCard";
import { ListApp } from "../../shared/components/list/ListApp";
import { Pagination } from "@mui/material";
import { useGetPropertiesAllQuery } from "../../redux/services/properties";
import { SkeletonApp } from "../../shared/components/skeleton/SkeletonApp";

const visisbleCountItems = 4;

export const Properties = () => {
  const [page, setPage] = useState(1);
  const { data: properties, isLoading } = useGetPropertiesAllQuery();

  const propertyCardList = properties
    ? properties.map((prop, id) => <PropertyCard key={id} {...prop} />)
    : Array(visisbleCountItems)
        .fill(" ")
        .map((_, id) => <SkeletonApp key={id} />);

  return (
    <>
      {isLoading ? (
        <ListApp list={propertyCardList} />
      ) : (
        <>
          {properties && properties.length && (
            <>
              <ListApp list={propertyCardList} />
              <Pagination
                count={Math.ceil(properties.length / visisbleCountItems)}
                page={page}
                onChange={(_, pageNumber) => setPage(pageNumber)}
                color="primary"
                sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
