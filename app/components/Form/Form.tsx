import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormData, validationSchema } from "@/app/models/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetUsersByIdQuery } from "@/lib/features/users/usersApiSlice";
import { useUpdateUserMutation } from "@/lib/features/users/usersApiSlice";

export default function Form({ userId }: { userId: number }) {
  const [updateUser] = useUpdateUserMutation();
  const { data, isError, isLoading, isSuccess } = useGetUsersByIdQuery(
    Number(userId)
  );
  console.log(userId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { zipcode, street, city, email, phone } = data;
    console.log(data);
    try {
      await updateUser({
        zipcode,
        street,
        city,
        email,
        phone,
      }).unwrap();

      console.log("successfully updated the user");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <div className="flex flex-col bg-black-qred-lighter pb-32">
        <div className="flex-col bg-white p-4 md:w-64 lg:w-80 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
            <div className="pb-6 space-y-2">
              <FormField
                type="text"
                name="street"
                label="street name"
                htmlFor="street"
                id="street"
                defaultValue={data.address.street}
                register={register}
                error={errors.street}
                required
              />
              {/* <FormField
                type="text"
                name="zipcode"
                label="postal code"
                htmlFor="zipcode"
                id="zipcode"
                defaultValue={data.address.zipcode}
                register={register}
                error={errors.zipcode}
                required
              /> */}
              <FormField
                type="text"
                name="city"
                label="city"
                htmlFor="city"
                id="city"
                defaultValue={data.address.city}
                register={register}
                error={errors.city}
                required
              />
              <FormField
                type="email"
                name="email"
                label="email"
                htmlFor="email"
                id="email"
                defaultValue={data.email}
                register={register}
                error={errors.email}
                required
              />
              {/*  <FormField
                type="tel"
                name="phone"
                label="phone"
                htmlFor="phone"
                id="phone"
                defaultValue={data.phone}
                register={register}
                error={errors.phone}
                required
              /> */}
            </div>
            <div>
              <button
                type="submit"
                className="flex bg-primary-qred w-full py-2 rounded-full justify-center text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}
