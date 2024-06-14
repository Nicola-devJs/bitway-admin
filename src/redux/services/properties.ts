import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILocationData, IResponseProperties, IResponseProperty } from "../../shared/interfaces/property";
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
      query: () => `/admin/`,
      providesTags: (results) =>
        results
          ? [...results.objects.map(({ _id }) => ({ type: "Properties" as const, _id } as const)), "Properties"]
          : ["Properties"],
    }),
    getPropertyById: builder.query<IResponseProperty, string>({
      query: (queryToId) => `/admin/${queryToId}`,
      providesTags: ["Properties"],
    }),
    addProperty: builder.mutation<IResponseProperty, IFormFields<GenericTypeFields>>({
      query: (body) => ({ url: "/admin/", body, method: "POST" }),
      invalidatesTags: ["Properties"],
    }),
    editProperty: builder.mutation<IResponseProperty, { id: string; data: IFormFields<GenericTypeFields> }>({
      query: ({ id, data }) => ({ url: `/admin/${id}`, body: data, method: "PATCH" }),
      invalidatesTags: ["Properties"],
    }),
    removeProperty: builder.mutation<IResponseProperty, string>({
      query: (id) => ({ url: `/admin/${id}`, method: "DELETE" }),
      invalidatesTags: ["Properties"],
    }),
    getLocation: builder.query<ILocationData, void>({ query: () => "/admin/location" }),
  }),
});

export const {
  useGetPropertiesAllQuery,
  useGetPropertyByIdQuery,
  useAddPropertyMutation,
  useRemovePropertyMutation,
  useEditPropertyMutation,
  useGetLocationQuery,
} = propertiesApi;
