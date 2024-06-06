import React from "react";
import { IErrorResponse } from "../../interfaces/error";

const isErrorResponse = (error: unknown): error is IErrorResponse => {
  if (typeof error === "object" && error !== null && "data" in error && "status" in error) {
    return true;
  } else {
    return false;
  }
};

export const ErrorApp = ({ error }: { error: unknown }) => {
  if (isErrorResponse(error)) {
    return <div>{error.data.message}</div>;
  } else {
    return null;
  }
};
