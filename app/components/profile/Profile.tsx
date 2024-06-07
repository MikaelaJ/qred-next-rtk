"use client";

import Image from "next/image";
import Form from "../formProfile/Form";

const logoGrenUrl = "/qred_logo.png";

export function Profile() {
  return (
    <div className="flex flex-col bg-black-qred-lighter items-center justify-center px-6">
      <div className="flex py-12">
        <Image src={logoGrenUrl} alt="Logo for Qred" width="100" height={200} />
      </div>

      <h4 className="flex text-center pb-12">Edit your profile</h4>
        <Form userId={7} />
    </div>
  );
}
