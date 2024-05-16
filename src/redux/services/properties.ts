import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPropertyCard, IFieldValues, IResponseProperties } from "../../shared/interfaces/property";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getPropertiesAll: builder.query<IResponseProperties, { page: number; limit: number }>({
      query: ({ page, limit }) => `properties?_page=${page}&_per_page=${limit}`,
      providesTags: (results) =>
        results
          ? [...results.data.map(({ id }) => ({ type: "Properties", id } as const)), { type: "Properties", id: "LIST" }]
          : [{ type: "Properties", id: "LIST" }],
    }),
    getPropertyById: builder.query<IPropertyCard, number>({
      query: (queryToId) => `properties/${queryToId}`,
      providesTags: (result, error, id) => [{ type: "Properties", id }],
    }),
    addProperty: builder.mutation<IPropertyCard, IFieldValues>({
      query: (body) => ({ url: "properties", body: { id: `${Date.now()}`, ...body }, method: "POST" }),
      invalidatesTags: [{ type: "Properties", id: "LIST" }],
    }),
    removeProperty: builder.mutation<IPropertyCard, string>({
      query: (id) => ({ url: `properties/${id}`, method: "DELETE" }),
      invalidatesTags: (result, error, id) => [{ type: "Properties", id }],
    }),
  }),
});

export const { useGetPropertiesAllQuery, useGetPropertyByIdQuery, useAddPropertyMutation, useRemovePropertyMutation } =
  propertiesApi;
