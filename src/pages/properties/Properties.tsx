import React from "react";
import { PropertyCard } from "../../shared/components/card/PropertyCard";
import { ListApp } from "../../shared/components/list/ListApp";

export const Properties = () => {
  const mockList = Array(10)
    .fill(" ")
    .map((_, id) => <PropertyCard key={id} />);

  return <ListApp list={mockList} />;
};
