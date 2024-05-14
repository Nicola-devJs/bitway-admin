import { TextareaAutosize } from "@mui/material";
import React from "react";

export const TextareaApp = () => {
  return (
    <TextareaAutosize
      minRows={5}
      maxRows={6}
      style={{
        font: "inherit",
        padding: "16.5px 14px",
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius: 4,
      }}
    />
  );
};
