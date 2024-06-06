// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* import { UsersApiResponse } from "@/models/interface"; */

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UsersApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/users" }),
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
  })
});

export const { useGetUsersByIdQuery, useGetAllUsersQuery } = usersApiSlice;
