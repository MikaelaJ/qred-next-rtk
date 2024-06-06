import React, { useEffect, useState } from "react";
import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormData, validationSchema } from "@/app/models/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetUsersByIdQuery } from "@/lib/features/users/usersApiSlice";

export default function Form({ userId }: { userId: number }) {
  const { data, isError, isLoading, isSuccess } = useGetUsersByIdQuery(
    Number(userId)
  );

  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (data) {
      setZipCode(data.address.zipcode);
      setStreet(data.address.street);
      setCity(data.address.city);
      setEmail(data.email);
      setPhone(data.phone);
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
    const { zipcode, street, city, email, phone, userId, error } = data;

    /* const fieldErrorMapping: Record<keyof FormData, string> = {
      email: "email",
      zipcode: "zipcode",
      street: "street",
      city: "city",
      phone: "phone",
      userId: "userId",
    }; */

    /* const fieldWithError = Object.keys(fieldErrorMapping).find(
      (field) => error[field]
    ); */
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            zipcode: zipcode,
            street: street,
            city: city,
            email: email,
            phone: phone,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log('json', json);
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
                validationSchema={{
                  required: "Email is a required field",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email should have correct format",
                  },
                }}
                required
              />
              <FormField
                type="text"
                name="zipcode"
                label="postal code"
                htmlFor="zipcode"
                id="zipcode"
                defaultValue={zipCode}
                onChange={(e) => setStreet(e.target.value)}
                register={register}
                error={errors.zipcode}
                validationSchema={{
                  required: "Field is required"
                }}
                required
              />
              <FormField
                type="text"
                name="city"
                label="city"
                htmlFor="city"
                id="city"
                defaultValue={city}
                onChange={(e) => setStreet(e.target.value)}
                register={register}
                error={errors.city}
                validationSchema={{
                  required: "Field is required"
                }}
                required
              />
              <FormField
                type="text"
                name="email"
                label="email"
                htmlFor="email"
                id="email"
                defaultValue={email}
                onChange={(e) => setStreet(e.target.value)}
                register={register}
                error={errors.email}
                validationSchema={{
                  required: "Field is required"
                }}
                required
              />
              <FormField
                type="text"
                name="phone"
                label="phone"
                htmlFor="phone"
                id="phone"
                defaultValue={phone}
                onChange={(e) => setStreet(e.target.value)}
                register={register}
                error={errors.phone}
                validationSchema={{
                  required: "Field is required"
                }}
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
