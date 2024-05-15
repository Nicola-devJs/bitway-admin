import { useState } from "react";
import { PropertyCard } from "../../shared/components/card/PropertyCard";
import { ListApp } from "../../shared/components/list/ListApp";
import { Pagination } from "@mui/material";
import { useGetPropertiesAllQuery } from "../../redux/services/properties";
import { SkeletonApp } from "../../shared/components/skeleton/SkeletonApp";

const visisbleCountItems = 8;

export const Properties = () => {
  const [page, setPage] = useState(1);
  const { data: properties } = useGetPropertiesAllQuery();

  const propertyCardList = properties
    ? properties.map((prop, id) => <PropertyCard key={id} {...prop} />)
    : Array(visisbleCountItems)
        .fill(" ")
        .map((_, id) => <SkeletonApp key={id} />);

  return (
    <>
      <>
        {/* <ListApp list={properties} minWidth={290} itemNode={PropertyCard} skeletonNode={SkeletonApp} /> */}
        {properties?.length ? (
          <Pagination
            count={Math.ceil(properties.length / visisbleCountItems)}
            page={page}
            onChange={(_, pageNumber) => setPage(pageNumber)}
            color="primary"
            sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}
          />
        ) : null}
      </>
    </>
  );
};
