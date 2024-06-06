"use client";
import { UsersApiResponse } from "@/app/models/interface";
import { useGetUsersByIdQuery } from "@/lib/features/users/usersApiSlice";
import Image from "next/image";
import { useEffect, useState } from "react";

const logoGrenUrl = "/qred_logo.png";

export function Profile({ userId }: { userId: number }) {
  console.log("userID", userId);
  const { data, isError, isLoading, isSuccess } = useGetUsersByIdQuery(
    Number(userId)
  );
  console.log(data?.address.zipcode, data?.address.city, data?.email);
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
  console.log(data, zipCode, city, email);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        zipcode: zipCode,
        city: city,
        email: email,
      }),
    });

    if (!response.ok) {
      // Handle error...
    }

    const responseData = await response.json();
    // Handle the response...
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
      <div className="flex flex-col bg-black-qred-lighter pb-32 w-2/6 items-center justify-center">
        <div className="flex px-2 py-12 items-center justify-center">
          <Image
            src={logoGrenUrl}
            alt="Logo for Qred"
            width="100"
            height={200}
          />
        </div>
        <h4 className="flex text-center pb-12">Edit your profile</h4>
        <p>ZipCode: {zipCode}</p>

        <div className="flex-col bg-white p-4 rounded-md">
          <form action="#" method="POST" className="flex-col space-y-4">
            <div>
              <label
                htmlFor="street_name"
                className="text-sm font-medium text-gray-700 uppercase"
              >
                Street Name
              </label>
              <input
                type="text"
                name="street_name"
                id="street_name"
                className="px-2 py-2 w-full border-black-qred-lighter border-2 rounded-md"
                defaultValue={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                className="px-2 py-2 w-full border-black-qred-lighter border-2 rounded-md"
                defaultValue={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="px-2 py-2 w-full border-black-qred-lighter border-2 rounded-md"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-2 py-2 w-full border-black-qred-lighter border-2 rounded-md"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="px-2 py-2 w-full border-black-qred-lighter border-2 rounded-md"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
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
