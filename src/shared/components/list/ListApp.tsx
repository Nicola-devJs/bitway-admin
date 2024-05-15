import React, { FC, useRef } from "react";

interface IProps<T> {
  list: T[] | undefined;
  minWidth: number;
  itemNode: React.ReactElement<T>;
  skeletonNode?: React.ReactNode;
}

const styles = (countColumns: number): React.CSSProperties => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `repeat(${countColumns}, 1fr)`,
  gridTemplateRows: "auto",
  gridGap: "1.346vw",
});

export const ListApp = <T,>({ list, minWidth, itemNode, skeletonNode }: IProps<T>) => {
  const containerListRef = useRef<HTMLDivElement>(null);
  const widthContainer = containerListRef.current?.offsetWidth || minWidth;

  return (
    <>
      {list?.length ? (
        <div style={styles(Math.floor(widthContainer / minWidth) || 1)} ref={containerListRef}>
          {list.map((item, id) => (
            <React.Fragment key={id}>{item}</React.Fragment>
          ))}
        </div>
      ) : (
        <div>Empty data</div>
      )}
    </>
  );
};
