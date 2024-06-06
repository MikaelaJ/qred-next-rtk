import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersApiResponse, UpdateUserFormData } from "@/app/models/interface";

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  reducerPath: "usersApi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsersById: builder.query<UsersApiResponse, number>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getAllUsers: builder.query<UsersApiResponse[], number>({
      query: (limit = 100) => `?limit=${limit}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    updateUser: builder.mutation<void, UpdateUserFormData>({
      query: (data) => {
        const { userId, ...userDetails } = data;
        const formData = new FormData();
        Object.entries(userDetails).forEach(([key, value]) => {
          formData.append(key, value as string | Blob );
        });

        return {
          url: `/${userId}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
  }),
});

export const { useGetUsersByIdQuery, useGetAllUsersQuery, useUpdateUserMutation } = usersApiSlice;
