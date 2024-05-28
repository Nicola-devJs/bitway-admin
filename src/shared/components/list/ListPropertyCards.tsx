import React from "react";
import { PropertyCard } from "../card/PropertyCard";
import { IPropertyCard } from "../../interfaces/property";
import { SkeletonCard } from "../skeleton/SkeletonApp";
import { EmptyApp } from "../empty/EmptyApp";

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
    <>
      {loading ? (
        <div style={styles(countColumns)}>
          {Array(countColumns * 2)
            .fill(" ")
            .map((_, id) => (
              <SkeletonCard key={id} />
            ))}
        </div>
      ) : !list ? (
        <div>404</div>
      ) : list.length === 0 ? (
        <EmptyApp />
      ) : (
        <div style={styles(countColumns)}>
          {list.map((item, id) => (
            <PropertyCard key={id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};
