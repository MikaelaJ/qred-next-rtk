import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiUser } from "@/app/models/interface";

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  reducerPath: "usersApi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserById: builder.query<ApiUser, number>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getAllUsers: builder.query<ApiUser[], number>({
      query: (limit = 100) => `?limit=${limit}`,
      providesTags: (result, error, limit) =>
        result
          ? [...result.map(({ id }) => ({ type: "User" as const, id }))]
          : [],
    }),
    updateUser: builder.mutation<void, ApiUser>({
      query: (data) => {
        console.log(JSON.stringify(data));
        return {
          url: `/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, user) => [{ type: "User", id: user.id }],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} = usersApiSlice;
