import React from "react";
import { PropertyCard } from "../card/PropertyCard";
import { IPropertyCard } from "../../interfaces/property";
import { SkeletonCard } from "../skeleton/SkeletonApp";

interface IProps {
  list: IPropertyCard[] | undefined;
  countColumns: number;
  loading: boolean;
}

const styles = (countColumns: number): React.CSSProperties => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `repeat(${countColumns}, 1fr)`,
  gridTemplateRows: "auto",
  gridGap: "1.346vw",
});

export const ListPropertyCards = ({ list, countColumns, loading }: IProps) => {
  return (
    <div style={styles(countColumns)}>
      {loading ? (
        Array(countColumns * 2)
          .fill(" ")
          .map((_, id) => <SkeletonCard key={id} />)
      ) : list && list.length !== 0 ? (
        list.map((item, id) => <PropertyCard key={id} {...item} />)
      ) : (
        <div>Empty data</div>
      )}
    </div>
  );
};
