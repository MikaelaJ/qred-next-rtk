import React, { useEffect, useState } from "react";
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

  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (data) {
      setZipCode(data.address.zipcode.toString());
      setStreet(data.address.street);
      setCity(data.address.city);
      setEmail(data.email);
      setPhone(data.phone.toString());
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    /* setError, */
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

 
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { zipcode, street, city, email, phone } = data;

    try {
      await updateUser({
        zipcode,
        street,
        city,
        email,
        phone,
      }).unwrap();

      // handle success...
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
                defaultValue={street}
                onChange={(e) => setStreet(e.target.value)}
                register={register}
                error={errors.street}
                required
              />
              <FormField
                type="text"
                name="zipcode"
                label="postal code"
                htmlFor="zipcode"
                id="zipcode"
                defaultValue={zipCode}
                onChange={(e) => setZipCode(e.target.value.toString())}
                register={register}
                error={errors.zipcode}
                required
              />
              <FormField
                type="text"
                name="city"
                label="city"
                htmlFor="city"
                id="city"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
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
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                register={register}
                error={errors.email}
                required
              />
              <FormField
                type="tel"
                name="phone"
                label="phone"
                htmlFor="phone"
                id="phone"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value.toString())}
                register={register}
                error={errors.phone}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-fullflex bg-primary-qred w-full py-2 rounded-full justify-center text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
