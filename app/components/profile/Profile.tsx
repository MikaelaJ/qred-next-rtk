"use client";
import { UsersApiResponse } from "@/app/models/interface";
import { useGetAllUsersQuery, useGetUsersByIdQuery } from "@/lib/features/users/usersApiSlice";



export const Profile = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    useGetAllUsersQuery(20);
  console.log(data);

  if (isError) {
    return (
      <div>
        <h1>There was an error</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess && data) {
    return (
      <div className="">
        <h3>Lista på användare:</h3>
       
        {
          <div>
            {data.map((user: UsersApiResponse, index:number) => (
              <div key={index}>
              <h2>{user.name}</h2> 
              <h4>{user.username}</h4> 
              </div>
            ))}
          </div>
        }
      </div>
    );
  }

  return null;
};
