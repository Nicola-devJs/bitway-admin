import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IFileResponse } from "../../shared/interfaces/uploadFile";

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadFiles: builder.mutation<IFileResponse, FormData>({
      query: (data) => ({
        url: "/admin/upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadFilesMutation } = filesApi;
