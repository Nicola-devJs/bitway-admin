import React from "react";
import { PropertyCard } from "../card/PropertyCard";
import { IPropertyCard } from "../../interfaces/property";
import { SkeletonCard } from "../skeleton/SkeletonApp";
import { EmptyApp } from "../empty/EmptyApp";
import { styled } from "@mui/material";

interface IProps {
  list: IPropertyCard[] | undefined;
  loading: boolean;
  error?: unknown;
}

const StyledList = styled("div")({
  display: "grid",
  grid: "auto / repeat(auto-fill, minmax(300px, 1.5fr))",
  gap: 10,
});

export const ListPropertyCards = ({ list, loading, error }: IProps) => {
  return (
    <>
      {loading ? (
        <StyledList>
          {Array(10)
            .fill(" ")
            .map((_, id) => (
              <SkeletonCard key={id} />
            ))}
        </StyledList>
      ) : !list ? (
        <div>{error.data.message}</div>
      ) : list.length === 0 ? (
        <EmptyApp />
      ) : (
        <StyledList>
          {list.map((item, id) => (
            <PropertyCard key={id} {...item} />
          ))}
        </StyledList>
      )}
    </>
  );
};
