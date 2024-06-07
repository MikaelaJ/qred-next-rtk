"use client";
import { UsersApiResponse } from "@/app/models/interface";
import { useGetAllUsersQuery } from "@/lib/features/users/usersApiSlice";



export const UserList = () => {
  const { data, isError, isLoading, isSuccess } =
    useGetAllUsersQuery(20);

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
      <div className="flex justify-center">       
        {
          <div className="flex-col py-12 w-1/2 ">
            {data.map((user: UsersApiResponse, index:number) => (
              <div className={`${index & 1 ? "bg-black-qred-lighter" : "bg-white"} py-2 px-2`} key={index}>
              <h1 className="text-secondary-qred text-2xl font-bold">{user.name}</h1> 
              <p className="text-sm"><span className="font-bold">User name: </span>{user.username}</p>
              <p className="text-sm"><span className="font-bold">Email: </span> {user.email}</p>
              
              </div>
            ))}
          </div>
        }
      </div>
    );
  }

  return null;
};
