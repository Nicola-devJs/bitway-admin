import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPropertyCard, IResponseProperties } from "../../shared/interfaces/property";
import { IFormFields, GenericTypeFields } from "../../shared/interfaces/form/formFields";
import { getCookie } from "../../shared/helpers/cookie";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_API,
    prepareHeaders: (headers) => {
      const token = getCookie("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Properties"],
  endpoints: (builder) => ({
    getPropertiesAll: builder.query<IResponseProperties, void>({
      query: () => `admin/`,
      providesTags: (results) =>
        results
          ? [
              ...results.objects.map(({ _id }) => ({ type: "Properties", _id } as const)),
              { type: "Properties", id: "LIST" },
            ]
          : [{ type: "Properties", id: "LIST" }],
    }),
    getPropertyById: builder.query<IPropertyCard, number>({
      query: (queryToId) => `admin/${queryToId}`,
      providesTags: (_, __, id) => [{ type: "Properties", id }],
    }),
    addProperty: builder.mutation<IPropertyCard, IFormFields<GenericTypeFields>>({
      query: (body) => ({ url: "admin/", body: { id: `${Date.now()}`, ...body }, method: "POST" }),
      invalidatesTags: [{ type: "Properties", id: "LIST" }],
    }),
    removeProperty: builder.mutation<IPropertyCard, string>({
      query: (id) => ({ url: `admin/${id}`, method: "DELETE" }),
      invalidatesTags: (_, __, id) => [{ type: "Properties", id }],
    }),
  }),
});

export const { useGetPropertiesAllQuery, useGetPropertyByIdQuery, useAddPropertyMutation, useRemovePropertyMutation } =
  propertiesApi;
