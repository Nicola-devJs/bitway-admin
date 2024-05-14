import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPropertyCard } from "../../shared/interfaces/property";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (buider) => ({
    getPropertiesAll: buider.query<IPropertyCard[], void>({ query: () => "properties" }),
    getPropertyById: buider.query<IPropertyCard, number>({
      query: (queryToId) => `properties/?id=${queryToId}`,
      transformResponse: (response: IPropertyCard[]) => response?.[0],
    }),
  }),
});

export const { useGetPropertiesAllQuery, useGetPropertyByIdQuery } = propertiesApi;
