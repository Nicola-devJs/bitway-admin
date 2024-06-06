import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IUserResponse } from "../../shared/interfaces/user";
import { actions } from "../slices/user";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_API,
  }),
  endpoints: (builder) => ({
    getAuthMe: builder.query<IUserResponse, string>({
      query: (token) => ({
        url: "/auth/me/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      onQueryStarted: async (token, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(actions.setUser(data));
        } catch (err) {
          console.log("Failed", err);
        }
      },
    }),
  }),
});

export const { useLazyGetAuthMeQuery } = userApi;
